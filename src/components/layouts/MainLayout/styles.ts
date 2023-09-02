'use client';

import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(MuiContainer)`
  background: url('/assets/backgrounds/default-background.png') no-repeat fixed;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-inline: 0 !important;
`;
