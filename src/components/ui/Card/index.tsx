import { type FC } from 'react';

import { CardHeader, Skeleton } from '@mui/material';

import { Text } from '@/ui';

import * as S from './styles';
import { type Props } from './types';

const Card: FC<Props> = ({ children, title, headIcon, minHeight, loading }) => {

  return (
    <S.CustomCard minheight={minHeight}>
      {
        loading
          ? (
            <Skeleton
              variant="rounded"
              height="100%"
              width="100%"
              animation="pulse"
              sx={{ bgcolor: 'rgb(134, 133, 133, 0.5)' }}
            />
            )
          : (
              <>
                <CardHeader
                  avatar={<S.IconWrapper>{headIcon}</S.IconWrapper>}
                  title={<Text $color='battleship_grey'>{title}</Text>}
                />
                <S.CustomCardContent >
                  {children}
                </S.CustomCardContent>
              </>
            )
      }
    </S.CustomCard>
  );

};

export default Card;
