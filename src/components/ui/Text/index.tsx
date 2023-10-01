import { type FC } from 'react';

import * as S from './styles';
import type * as T from './types';

const Text: FC<T.Props> = ({ children, $color, $fontsize, $fontWeight }) => {

  return (
    <S.CustomTypography
      $color={$color}
      $fontsize={$fontsize}
      $fontWeight={$fontWeight}
    >
      {children}
    </S.CustomTypography>
  );

};

export default Text;
