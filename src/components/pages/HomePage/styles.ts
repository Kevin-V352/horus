import {
  Grid,
  Slider,
  Stack,
  Typography,
  styled
} from '@mui/material';

import type * as I from './types';

export const CustomGridContainer = styled(Grid)`
  flex: 1;
`;

export const CustomGridPanel1Item = styled(Grid)`
  flex: 1
`;

export const CustomGridPanel2Item = styled(Grid)((props) => ({
  // @ts-expect-error unknow error
  backgroundColor: props.theme.customTheme.pallete.background.black_transparent_03,
  flex:            1,
  padding:         '30px'
}));

export const CardMainTextValue = styled(Typography)<I.CardMainTextValue>((props) => ({
  // @ts-expect-error unknow error
  color:    props.theme.customTheme.pallete.typography.white,
  // @ts-expect-error unknow error
  fontSize: (props.size === 'small') ? props.theme.customTheme.typography.font_size_4 : (props.size === 'large') ? props.theme.customTheme.typography.font_size_2 : props.theme.customTheme.typography.font_size_3
}));

export const UVSlider = styled(Slider)`
  & .MuiSlider-track, .MuiSlider-rail {
    background: linear-gradient(90deg, rgba(146,229,189,1) 0%, rgba(155,132,229,1) 33%, rgba(223,99,110,1) 66%, rgba(241,238,51,1) 100%);
    border: none;
  };

  & .MuiSlider-thumb {
    background-color: white;
    border: solid #eecf2d 4px;
  }
`;

export const StackList = styled(Stack)`
  height: 100%;
  text-align: center;
  justify-content: space-between;
`;
