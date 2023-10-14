'use client';

import { useContext, type FC } from 'react';

import { WeatherContext } from '@/contexts';

import * as S from './styles';
import { type IProps } from './types';

const MainLayout: FC<IProps> = ({ children }) => {

  const { backgroundId } = useContext(WeatherContext);

  return (
    <S.MainLayoutContainer
      maxWidth={false}
      $backgroundImageId={backgroundId}
    >
      {children}
    </S.MainLayoutContainer>
  );

};

export default MainLayout;
