import { type CSSProperties, type ReactNode } from 'react';

export interface Props extends CustomTypographyProps {
  children: ReactNode;
};

export interface CustomTypographyProps {
  $color?: 'battleship_grey' | 'white';
  $fontSize?: 'font_size_xxl' | 'font_size_xl' | 'font_size_lg' | 'font_size_md' | 'font_size_sm';
  $fontWeight?: CSSProperties['fontWeight'];
};
