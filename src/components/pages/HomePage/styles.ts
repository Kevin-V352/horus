import SearchIcon from '@mui/icons-material/Search';
import {
  Accordion,
  AccordionSummary,
  Button,
  Grid,
  Slider,
  Stack,
  styled
} from '@mui/material';

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
  padding: 0px;
  text-align: left;
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
