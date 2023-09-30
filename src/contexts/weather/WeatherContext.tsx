import { createContext } from 'react';

import type * as T from './types';

export const WeatherContext = createContext({} as T.IWeatherContextProps);
