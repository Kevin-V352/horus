import { type ReactNode } from 'react';

import { type WeatherIconId } from '@/interfaces';

export interface IWeatherState {
  backgroundId: WeatherIconId;
};

export interface IWeatherContextProps extends IWeatherState {
  changeBackground: (backgroundId: WeatherIconId) => void;
};

export interface IWeatherProviderProps {
  children: ReactNode;
};
