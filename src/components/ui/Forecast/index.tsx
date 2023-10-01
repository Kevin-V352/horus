import { type FC } from 'react';

import SimpleBar, { type Props as SimpleBarProps } from 'simplebar-react';

import 'simplebar-react/dist/simplebar.min.css';

import { Text, WeatherIcon } from '@/ui';
import { formatters } from '@/utils';

import simpleBarCustomStyles from './Simplebar.module.css';
import * as S from './styles';
import type * as T from './types';

const Forecast: FC<T.Props> = ({ data }) => {

  const simpleBarProps: SimpleBarProps = {
    autoHide:   false,
    classNames: {
      track:     simpleBarCustomStyles.track,
      scrollbar: simpleBarCustomStyles.scrollbar
    }
  };

  return (
    <SimpleBar {...simpleBarProps}>
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
    </SimpleBar>
  );

};

export default Forecast;
