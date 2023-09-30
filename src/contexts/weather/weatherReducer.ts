import { type WeatherIconId } from '@/interfaces';

import type * as T from './types';

type WeatherActionType =
  | { type: 'CHANGE_BACKGROUND'; payload: WeatherIconId }

export const weatherReducer = (state: T.IWeatherState, action: WeatherActionType): T.IWeatherState => {

  switch (action.type) {

    case 'CHANGE_BACKGROUND':
      return {
        ...state,
        backgroundId: action.payload
      };

    default:
      return state;

  };

};
