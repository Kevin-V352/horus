import { Box, Card, CardContent, styled, Typography } from '@mui/material';

import type * as T from './types';

export const CustomCard = styled(Card)<T.CustomCard>((props) => ({
  // @ts-expect-error unknow error
  backgroundColor: props.theme.customTheme.pallete.background.black_transparent_05,
  borderRadius:    '10px',
  display:         'flex',
  flexDirection:   'column',
  height:          '100%',
  minHeight:       props.minheight ?? 'auto'
}));

export const CustomCardContent = styled(CardContent)`
  flex: 1;
`;

export const CustomTypography = styled(Typography)((props) => ({
  // @ts-expect-error unknow error
  fontSize: props.theme.customTheme.typography.font_size_4,
  // @ts-expect-error unknow error
  color:    props.theme.customTheme.pallete.typography.battleship_grey
}));

export const IconWrapper = styled(Box)((props) => ({
  // @ts-expect-error unknow error
  color: props.theme.customTheme.pallete.typography.battleship_grey
}));
