import { type FC, type PropsWithChildren } from 'react';

import ThemeRegistry from './MuiThemeRegistry/ThemeRegistry';

const Providers: FC<PropsWithChildren> = (props) => {

  return (
    <ThemeRegistry>
      {props.children}
    </ThemeRegistry>
  );

};

export default Providers;
