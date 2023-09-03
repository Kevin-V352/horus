import { type FC } from 'react';

import { CardHeader } from '@mui/material';

import * as S from './styles';
import { type Props } from './types';

const Card: FC<Props> = ({ children, title, headIcon, minHeight }) => {

  return (
    <S.CustomCard minheight={minHeight}>
      <CardHeader
        avatar={<S.IconWrapper>{headIcon}</S.IconWrapper>}
        title={<S.CustomTypography>{title}</S.CustomTypography>}
      />
      <S.CustomCardContent >
        {children}
      </S.CustomCardContent>
    </S.CustomCard>
  );

};

export default Card;
