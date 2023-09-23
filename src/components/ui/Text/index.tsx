import { type FC } from 'react';

import * as S from './styles';
import type * as T from './types';

const Text: FC<T.Props> = ({ children, $color, $fontsize }) => {

  return (
    <S.CustomTypography
      $color={$color}
      $fontsize={$fontsize}
    >
      {children}
    </S.CustomTypography>
  );

};

export default Text;
