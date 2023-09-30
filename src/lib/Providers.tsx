'use client';

import { type FC, type PropsWithChildren } from 'react';

import { WeatherProvider } from '@/contexts';

import ThemeRegistry from './MuiThemeRegistry/ThemeRegistry';

const Providers: FC<PropsWithChildren> = (props) => {

  return (
    <ThemeRegistry>
      <WeatherProvider>
        {props.children}
      </WeatherProvider>
    </ThemeRegistry>
  );

};

export default Providers;
