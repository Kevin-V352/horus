import { type FC } from 'react';

import { Typography } from '@mui/material';

import * as S from './styles';

const HomePage: FC = () => {

  return (
    <S.CustomGridContainer container >
      <S.CustomGridItem item xs={6}>
        <Typography>COL 1</Typography>
      </S.CustomGridItem>
      <S.CustomGridItem item xs={6} isPanel>
        <Typography>COL 2</Typography>
      </S.CustomGridItem>
    </S.CustomGridContainer>
  );

};

export default HomePage;
