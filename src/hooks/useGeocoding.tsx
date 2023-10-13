import { useEffect, useState } from 'react';

import { horusAPI } from '@/config';
import { useDebounced } from '@/hooks';
import { type MinGeocodingResponse } from '@/interfaces';

interface IHookState {
  error: any;
  loading: boolean;
  locations: MinGeocodingResponse[];
  placeToFind: string;
};

interface IHookResponse extends IHookState {
  searchLocation: (location: string) => void;
};

const useGeocoding = (): IHookResponse => {

  const [state, setState] = useState<IHookState>({
    error:       null,
    loading:     false,
    locations:   [],
    placeToFind: ''
  });

  const debouncedValue = useDebounced(state.placeToFind);

  useEffect(() => {

    if (debouncedValue && debouncedValue.trim() !== '') {

      void getLocations(debouncedValue);

    } else {

      setState((prevState) => ({
        ...prevState,
        error:     null,
        locations: []
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

      setState((prevState) => ({
        ...prevState,
        loading:   false,
        locations: data
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

  return {
    ...state,
    searchLocation
  };

};

export default useGeocoding;
