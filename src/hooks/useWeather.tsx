import { useState } from 'react';

import axios from 'axios';
import useSWR from 'swr';

import { type MinWeatherResponse } from '@/interfaces';

interface IHookState {
  lat:          number | null;
  lon:          number | null;
  locationName: string;
  lang?:         'en' | 'es';
};

interface IHookResponse {
  inputData:    IHookState;
  responseData: MinWeatherResponse | null;
  isLoading:    boolean;
  isError:      any;
  setLocation:  (locationData: IHookState) => void;
};

const fetcher = async (url: string): Promise<any> => await axios.get(url).then(res => res.data);

const useWeather = (): IHookResponse => {

  const [state, setState] = useState<IHookState>({
    lat:          null,
    lon:          null,
    locationName: 'Selecciona una localizacion',
    lang:         'en'
  });

  const { data, error } = useSWR<MinWeatherResponse>(
    `/api/weather?lat=${state.lat ?? 40.741895}&lon=${state.lon ?? -73.989308}&lang=${state.lang}`,
    fetcher
  );

  const setLocation = (locationData: IHookState): void => {

    setState((prevState) => ({ ...prevState, ...locationData }));

  };

  return {
    inputData:    state,
    responseData: data ?? null,
    isLoading:    (!data && !error),
    isError:      error,
    setLocation
  };

};

export default useWeather;
