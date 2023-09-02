'use client';

import {
  Container,
  Grid,
  styled
} from '@mui/material';

import type * as T from './types';

export const CustomContainer = styled(Container)`
  flex: 1;
  display: flex;
`;

export const CustomGridContainer = styled(Grid)`
  flex: 1;
`;

export const CustomGridItem = styled(Grid)<T.CustomGridItem>((props) => ({
  // @ts-expect-error pepe
  backgroundColor: props.isPanel ? props.theme.customTheme.pallete.background.black_transparent_02 : 'transparent',
  flex:            1
}));
