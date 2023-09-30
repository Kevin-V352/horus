'use client';

import { useContext, type FC } from 'react';

import { WeatherContext } from '@/contexts';

import * as S from './styles';
import { type IProps } from './types';

const MainLayout: FC<IProps> = ({ children }) => {

  const { backgroundId } = useContext(WeatherContext);

  return (
    <S.Container
      maxWidth={false}
      $backgroundimageid={backgroundId}
    >
      {children}
    </S.Container>
  );

};

export default MainLayout;
