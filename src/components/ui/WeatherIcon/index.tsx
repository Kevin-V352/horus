import { type FC } from 'react';

import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';

import type * as T from './types';

const WeatherIcon: FC<T.Props> = ({ iconId }) => {

  switch (iconId) {

    case '01d':
      return <LightModeOutlinedIcon/>;

    case '01n':
      return <DarkModeOutlinedIcon/>;

    case '02d':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <CloudOutlinedIcon/>;

    case '02n':
      return <NightsStayOutlinedIcon/>;

    case '09d':
    case '09n':
    case '10d':
    case '10n':
      return <WaterDropOutlinedIcon/>;

    case '11d':
    case '11n':
      return <ThunderstormOutlinedIcon/>;

    case '13d':
    case '13n':
      return <AcUnitOutlinedIcon/>;

    case '50d':
    case '50n':
      return <WavesOutlinedIcon/>;

    case '10001d':
    case '10001n':
      return <WbTwilightOutlinedIcon/>;

    default:
      return <BlockOutlinedIcon/>;

  };

};

export default WeatherIcon;
