import SearchIcon from '@mui/icons-material/Search';
import {
  Accordion,
  AccordionSummary,
  Button,
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
  flex: 1;
  padding: 30px;
`;

export const CustomGridPanel2Item = styled(Grid)((props) => ({
  // @ts-expect-error unknow error
  backgroundColor: props.theme.customTheme.pallete.background.black_transparent_03,
  flex:            1,
  padding:         '30px',
  overflowY:       'scroll',
  maxHeight:       '100vh'
}));

export const CardMainTextValue = styled(Typography)<I.CardMainTextValue>((props) => {

  // @ts-expect-error unknow error
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { font_size_1, font_size_2, font_size_3, font_size_4 } = props.theme.customTheme.typography;

  const fontSizes = {
    extralarge: font_size_1,
    large:      font_size_2,
    default:    font_size_3,
    small:      font_size_4
  };

  return ({
    // @ts-expect-error unknow error
    color:    props.theme.customTheme.pallete.typography.white,
    // @ts-expect-error unknow error
    fontSize: fontSizes[props.size] ?? props.fontSize ?? fontSizes.default
  });

});

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

export const LocationButton = styled(Button)`
  text-transform: none;
  width: fit-content;
  padding: 20px;
`;

export const CustomSearchIcon = styled(SearchIcon)`
  color: #f0d12d;
  transform: scale(1.6);
`;

export const DaysAccordion = styled(Accordion)`
  &.MuiAccordion-root {
    background-color: transparent;
    box-shadow: none;
  };

  &.MuiAccordion-root::before {
    display: none;
  };
`;

export const DaysAccordionSummary = styled(AccordionSummary)((props) => ({
  '& .MuiAccordionSummary-expandIconWrapper': {
    // @ts-expect-error unknow error
    color:          props.theme.customTheme.pallete.typography.white,
    width:          '100%',
    justifyContent: 'center',
    boxShadow:      'none'
  }
}));
