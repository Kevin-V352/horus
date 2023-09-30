'use client';

import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/system';

import type * as T from './types';

export const Container = styled(MuiContainer)<T.IMainLayoutContainerProps>((props) => ({
  background:         `url('/assets/backgrounds/${props.$backgroundimageid}.jpg') no-repeat fixed`,
  backgroundSize:     'cover',
  backgroundPosition: 'center',
  display:            'flex',
  flexDirection:      'column',
  minHeight:          '100vh',
  paddingInline:      '0 !important',
  transition:         'ease-out 0.5s'
}));
