'use client';

import * as React from 'react';
import { type FC } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { muiCustomTheme } from '@/themes';

import NextAppDirEmotionCacheProvider from './EmotionCache';

const ThemeRegistry: FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={muiCustomTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );

};

export default ThemeRegistry;
