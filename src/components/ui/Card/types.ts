import { type ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  headIcon: ReactNode;
  minHeight?: number;
  title: string;
};

export interface CustomCard {
  minheight?: number;
};
