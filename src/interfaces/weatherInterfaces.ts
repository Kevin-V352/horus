export interface OpenWeaterQueryParams {
  exclude?: string;
  lang?: 'en' | 'es';
  lat: number;
  lon: number;
  units?: 'standar' | 'metric' | 'imperial';
}

export interface OpenWeatherAPI25OneCallResponse {
  lat:             number;
  lon:             number;
  timezone:        string;
  timezone_offset: number;
  current:         Current;
  hourly:          Current[];
  daily:           Daily[];
}

export interface Current {
  dt:         number;
  sunrise?:   number;
  sunset?:    number;
  temp:       number;
  feels_like: number;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  uvi:        number;
  clouds:     number;
  visibility: number;
  wind_speed: number;
  wind_deg:   number;
  wind_gust:  number;
  weather:    Weather[];
  pop?:       number;
  rain?:      Rain;
  snow?:      Snow;
}

export interface Snow {
  '1h': number;
}

export interface Rain {
  '1h': number;
}

export interface Weather {
  id:          number;
  main:        Main;
  description: Description;
  icon:        Icon;
}

export enum Description {
  BrokenClouds = 'broken clouds',
  ClearSky = 'clear sky',
  FewClouds = 'few clouds',
  LightRain = 'light rain',
  OvercastClouds = 'overcast clouds',
  ScatteredClouds = 'scattered clouds',
}

export enum Icon {
  The01D = '01d',
  The02D = '02d',
  The02N = '02n',
  The03N = '03n',
  The04D = '04d',
  The04N = '04n',
  The10D = '10d',
}

export enum Main {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
}

export interface Daily {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  moonrise:   number;
  moonset:    number;
  moon_phase: number;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  wind_speed: number;
  wind_deg:   number;
  wind_gust:  number;
  weather:    Weather[];
  clouds:     number;
  pop:        number;
  uvi:        number;
  rain?:      number;
}

export interface FeelsLike {
  day:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface MinWeatherResponse {
  current: {
    temp:           number;
    uvi:            number;
    sunset:         string | null;
    precipitation?: number;
    humidity:       number;
    pressure:       number;
    iconId:         string;
    description:    string;
  };
  hourly: MinHourlyWeater[];
  daily: MinDailyWeater[];
}

export interface MinHourlyWeater {
  temp:   number;
  iconId: string;
  type:   'sunset' | 'sunrise' | 'hour';
  hour:   number | string;
}

export interface MinDailyWeater {
  minTemp:  number;
  maxTemp:  number;
  dayTemp:  number;
  dayName:  string;
  iconId:   string;
}

export type DayEvent = {
  hour:     number;
  minutes:  number;
} | null;
