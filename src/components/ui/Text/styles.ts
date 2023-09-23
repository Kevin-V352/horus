import { type CustomTheme, styled, Typography, type Theme } from '@mui/material';

import type * as T from './types';

const getColorFromTheme = (color: T.CustomTypographyProps['$color'], theme: Theme): string => {

  const { customTheme: { pallete } } = theme as CustomTheme;

  if (!color) return pallete.typography.white;

  const availableColors: Record<string, string> = pallete.typography;

  if (availableColors[color]) return availableColors[color];
  else return color;

};

const getFontSizeFromTheme = (fontSize: T.CustomTypographyProps['$fontsize'], theme: Theme): string => {

  const { customTheme: { typography } } = theme as CustomTheme;

  if (!fontSize) return typography.font_size_sm;

  const availableFontSizes: Record<string, string> = typography;

  if (availableFontSizes[fontSize]) return availableFontSizes[fontSize];
  else return fontSize;

};

export const CustomTypography = styled(Typography)<T.CustomTypographyProps>((props) => ({
  color:    getColorFromTheme(props.$color, props.theme),
  fontSize: getFontSizeFromTheme(props.$fontsize, props.theme)
}));
