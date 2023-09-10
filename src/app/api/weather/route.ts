import { type NextRequest } from 'next/server';

import { openWeather25API } from '@/config';
import { type DayEvent, type MinWeatherResponse, type OpenWeaterQueryParams, type OpenWeatherAPI25OneCallResponse } from '@/interfaces';
import { formatters } from '@/utils';

export const GET = async (req: NextRequest): Promise<Response> => {

  const url = new URL(req.url);

  const lat = url.searchParams.get('lat');
  const lon = url.searchParams.get('lon');
  const lang = url.searchParams.get('lang');

  const testArr = [lat, lon];
  const acceptedLangs = ['en', 'es'];
  const invalidCoordinate = testArr.findIndex((testItem) => ((testItem === null) || (typeof Number(testItem) !== 'number')));
  const invalidLang = ((lang === null) || !acceptedLangs.includes(lang));

  if (invalidCoordinate !== -1 || invalidLang) {

    return new Response(JSON.stringify({
      error:   'Invalid parameters',
      message: invalidLang
        ? `The ${lang} value is invalid. The accepted values are: "en" or "es".`
        : `The ${testArr[invalidCoordinate]} value is invalid. Coordinates must be numeric values.`
    }));

  };

  const paramsToSend: OpenWeaterQueryParams = {
    lat:     Number(lat),
    lon:     Number(lon),
    lang:    (lang === 'en') ? 'en' : 'en',
    units:   'metric',
    exclude: 'minutely'
  };

  try {

    const { data } = await openWeather25API.get<OpenWeatherAPI25OneCallResponse>('/onecall', {
      params: paramsToSend
    });

    const { current, hourly, daily } = data;

    let sunset: DayEvent = null;
    let sunrise: DayEvent = null;

    if (current?.sunset) {

      const currentSunset = new Date(current.sunset * 1000);
      sunset = { hour: currentSunset.getHours(), minutes: currentSunset.getMinutes() };

    };

    if (current?.sunrise) {

      const currentSunrise = new Date(current.sunrise * 1000);
      sunrise = { hour: currentSunrise.getHours(), minutes: currentSunrise.getMinutes() };

    };

    const formattedData: MinWeatherResponse = {
      current: {
        temp:          Math.round(current.temp),
        uvi:           current.uvi,
        sunset:        sunset ? `${sunset.hour}:${sunset.minutes}` : null,
        precipitation: current?.rain?.['1h'],
        humidity:      current.humidity,
        pressure:      current.pressure,
        iconId:        current.weather[0].icon,
        description:   current.weather[0].description
      },
      hourly: formatters.insertSunsetAndSunrise(hourly, sunset, sunrise),
      daily:  daily.map(({ temp, weather, dt }) => ({
        minTemp: Math.round(temp.min),
        maxTemp: Math.round(temp.max),
        dayTemp: Math.round(temp.day),
        iconId:  weather[0].icon,
        dayName: formatters.getDayNames(dt)
      }))
    };

    return new Response(JSON.stringify(formattedData), { status: 200 });

  } catch (error) {

    console.error(error);
    return new Response(JSON.stringify({
      error:   'Internal error',
      message: 'An unexpected error has occurred'
    }), { status: 500 });

  };

};
