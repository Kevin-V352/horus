import { useReducer, type FC } from 'react';

import { type WeatherIconId } from '@/interfaces';

import type * as T from './types';
import { WeatherContext } from './WeatherContext';
import { weatherReducer } from './weatherReducer';

const WEATHER_INITIAL_STATE: T.IWeatherState = {
  backgroundId: '01d'
};

export const WeatherProvider: FC<T.IWeatherProviderProps> = ({ children }) => {

  const [state, dispatch] = useReducer(weatherReducer, WEATHER_INITIAL_STATE);

  const changeBackground = (backgroundId: WeatherIconId): void => {

    dispatch({ type: 'CHANGE_BACKGROUND', payload: backgroundId });

  };

  return (
    <WeatherContext.Provider value={{
      ...state,
      changeBackground
    }}>
      {children}
    </WeatherContext.Provider>
  );

};
