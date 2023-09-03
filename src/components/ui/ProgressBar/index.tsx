import { type FC } from 'react';

import { Box, Grid } from '@mui/material';

import * as S from './styles';
import type * as T from './types';

const ProgressBar: FC<T.Props> = ({ title, icon, minValue, maxValue }) => {

  return (
    <S.CustomGridContainer
      container
      alignItems="center"
      columnSpacing="10px"
    >
      <Grid item xs={3}>
        <S.CustomTypography>{title}</S.CustomTypography>
      </Grid>
      <Grid item xs={1}>
        <Box>{icon}</Box>
      </Grid>
      <Grid item xs={1}>
        <S.CustomTypography>{`${minValue}°`}</S.CustomTypography>
      </Grid>
      <Grid item xs={6}>
        <S.GradientLinearProgress variant="determinate" value={60}/>
      </Grid>
      <Grid item xs={1}>
        <S.CustomTypography>{`${maxValue}°`}</S.CustomTypography>
      </Grid>
    </S.CustomGridContainer>
  );

};

export default ProgressBar;
