import axios from 'axios';
import useSWR from 'swr';

import { type MinWeatherResponse } from '@/interfaces';

interface HookResponse {
  data:             MinWeatherResponse | null;
  isLoading:        boolean;
  isError:          any;
};

const fetcher = async (url: string): Promise<any> => await axios.get(url).then(res => res.data);

const useWeather = (lat: number, lon: number, lang: 'en' | 'es'): HookResponse => {

  const { data, error } = useSWR<MinWeatherResponse>(`/api/weather?lat=${lat}&lon=${lon}&lang=${lang}`, fetcher);

  return {
    data:      data ?? null,
    isLoading: (!data && !error),
    isError:   error
  };

};

export default useWeather;
