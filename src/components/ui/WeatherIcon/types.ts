import { type SvgIconProps } from '@mui/material';

import { type WeatherIconId } from '@/interfaces';

export interface Props {
  iconId: WeatherIconId;
  iconProps?: SvgIconProps;
};
