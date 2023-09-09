import axios from 'axios';

const openWeather25API = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params:  {
    appid: process.env.OPEN_WEATHER_API_KEY ?? ''
  }
});

export default openWeather25API;
