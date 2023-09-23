import { type FC } from 'react';

import { Box, Grid } from '@mui/material';

import * as S from './styles';
import type * as T from './types';
import { Text, WeatherIcon } from '..';

const ProgressBar: FC<T.Props> = ({ data }) => {

  const { dayName, dayTemp, iconId, maxTemp, minTemp } = data;
  const valuePercetage = Math.round((dayTemp * 100) / maxTemp);

  return (
    <S.CustomGridContainer
      container
      alignItems="center"
      columnSpacing="10px"
    >
      <Grid item xs={3}>
        <Text $fontsize='font_size_md'>{dayName}</Text>
      </Grid>
      <Grid item xs={1}>
        <Box>
          <WeatherIcon iconId={iconId as any}/>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Text $fontsize='font_size_md'>{`${minTemp}°`}</Text>
      </Grid>
      <Grid item xs={6}>
        <S.GradientLinearProgress
          variant="determinate"
          value={valuePercetage}
        />
      </Grid>
      <Grid item xs={1}>
        <Text $fontsize='font_size_md'>{`${maxTemp}°`}</Text>
      </Grid>
    </S.CustomGridContainer>
  );

};

export default ProgressBar;
