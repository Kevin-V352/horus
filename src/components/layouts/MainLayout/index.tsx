import { type FC } from 'react';

import * as S from './styles';
import { type Props } from './types';

const MainLayout: FC<Props> = ({ children }) => {

  return (
    <S.Container maxWidth={false}>
      {children}
    </S.Container>
  );

};

export default MainLayout;
