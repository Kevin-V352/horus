import { useEffect, useState } from 'react';

import { horusAPI } from '@/config';
import { useDebounced } from '@/hooks';
import {
  MinGeocodingResponseType,
  type MinGeocodingClientResponse,
  type MinGeocodingResponse
} from '@/interfaces';

interface IHookState {
  error: any;
  loading: boolean;
  locations: MinGeocodingClientResponse[];
  placeToFind: string;
};

interface IHookResponse extends IHookState {
  reset: () => void;
  saveLocationInLocalHistory: (location: MinGeocodingClientResponse) => void;
  searchLocation: (location: string) => void;
};

const userLocationHistoryKey = 'userLocationHistory';

const saveLocationInLocalHistory = (location: MinGeocodingClientResponse): void => {

  const userLocationHistoryFromLocalStorage = localStorage.getItem(userLocationHistoryKey);
  let newUserLocationHistory: MinGeocodingClientResponse[] = [];

  if (userLocationHistoryFromLocalStorage) {

    const userLocationHistory: MinGeocodingClientResponse[] = JSON.parse(userLocationHistoryFromLocalStorage);
    const itemIndexInHistory = userLocationHistory.findIndex(({ label }) => (label === location.label));

    if (itemIndexInHistory === 0 && userLocationHistory.length === 1) return;

    if (itemIndexInHistory !== -1) {

      const tempHistory = [
        ...userLocationHistory.slice(0, itemIndexInHistory),
        ...userLocationHistory.slice(itemIndexInHistory + 1)
      ];

      newUserLocationHistory = [{ ...location, type: MinGeocodingResponseType.historyItem }, ...tempHistory];

    } else {

      const tempHistory = (userLocationHistory.length + 1 === 6)
        ? userLocationHistory.slice(0, -1)
        : userLocationHistory;

      newUserLocationHistory = [{ ...location, type: MinGeocodingResponseType.historyItem }, ...tempHistory];

    };

  } else {

    newUserLocationHistory = [{ ...location, type: MinGeocodingResponseType.historyItem }];

  };

  localStorage.setItem(userLocationHistoryKey, JSON.stringify(newUserLocationHistory));

};

const getLocationFromLocalHistory = (): MinGeocodingClientResponse[] => {

  const userLocationHistoryFromLocalStorage = localStorage.getItem(userLocationHistoryKey);

  if (userLocationHistoryFromLocalStorage) return JSON.parse(userLocationHistoryFromLocalStorage);
  else return [];

};

//* HOOK --------------------------------------------------------------->>

const useGeocodingStateInitalValue: IHookState = {
  error:       null,
  loading:     false,
  locations:   [],
  placeToFind: ''
};

const useGeocoding = (): IHookResponse => {

  const [state, setState] = useState<IHookState>(useGeocodingStateInitalValue);

  const debouncedValue = useDebounced(state.placeToFind);

  useEffect(() => {

    setState({
      ...useGeocodingStateInitalValue,
      locations: getLocationFromLocalHistory()
    });

  }, []);

  useEffect(() => {

    if (debouncedValue && debouncedValue.trim() !== '') {

      void getLocations(debouncedValue);

    } else {

      setState((prevState) => ({
        ...prevState,
        error:     null,
        locations: getLocationFromLocalHistory()
      }));

    };

  }, [debouncedValue]);

  const searchLocation = (location: string): void => {

    setState((prevState) => ({ ...prevState, placeToFind: location }));

  };

  const getLocations = async (location: string): Promise<void> => {

    setState((prevState) => ({ ...prevState, loading: true }));

    try {

      const { data } = await horusAPI.get<MinGeocodingResponse[]>('/geocoding', {
        params: {
          location
        }
      });

      const newLocations: MinGeocodingClientResponse[] = data.map(({ lat, lon, locationName }, index) => ({
        label:  locationName,
        lat,
        lon,
        tempId: (Date.now() + index),
        type:   MinGeocodingResponseType.newItem
      }));

      setState((prevState) => ({
        ...prevState,
        loading:   false,
        locations: newLocations
      }));

    } catch (error) {

      console.error(error);
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error:   true
      }));

    };

  };

  const reset = (): void => {

    setState({
      ...useGeocodingStateInitalValue,
      locations: getLocationFromLocalHistory()
    });

  };

  return {
    ...state,
    saveLocationInLocalHistory,
    searchLocation,
    reset
  };

};

export default useGeocoding;
