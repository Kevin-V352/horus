import { type FC } from 'react';

import { Text, WeatherIcon } from '@/ui';
import { formatters } from '@/utils';

import * as S from './styles';
import type * as T from './types';

const Forecast: FC<T.Props> = ({ data }) => {

  return (
    <S.ForecastContainer direction="row">
      {
        data.map(({ hour, iconId, temp, type }, index) => (
          <S.ForecastItem key={index}>
            <Text>{hour}</Text>
            <WeatherIcon iconId={iconId as any} />
            <Text>{(type === 'hour') ? `${temp}°` : formatters.capitalize(type)}</Text>
          </S.ForecastItem>
        ))
      }
    </S.ForecastContainer>
  );

};

export default Forecast;
