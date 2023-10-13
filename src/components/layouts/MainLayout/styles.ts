'use client';

import { Container } from '@mui/material';
import { styled } from '@mui/system';

import type * as T from './types';

const mainLayoutContainerExtraProps = [
  '$backgroundImageId'
];

export const MainLayoutContainer = styled(Container, {
  shouldForwardProp: (prop) => (!mainLayoutContainerExtraProps.includes(prop as string))
})<T.IMainLayoutContainerProps>((props) => ({
  background:         `url('/assets/backgrounds/${props.$backgroundImageId}.jpg') no-repeat fixed`,
  backgroundSize:     'cover',
  backgroundPosition: 'center',
  display:            'flex',
  flexDirection:      'column',
  minHeight:          '100vh',
  paddingInline:      '0 !important',
  transition:         'ease-out 0.5s'
}));
