import { styled, LinearProgress, Grid } from '@mui/material';

export const CustomGridContainer = styled(Grid)((props) => ({
  // @ts-expect-error unknow error
  color: props.theme.customTheme.pallete.typography.white
}));

export const GradientLinearProgress = styled(LinearProgress)`
  background-color: #868585;
  border-radius: 10px;
  
  & .MuiLinearProgress-barColorPrimary {
    background: linear-gradient(90deg, rgba(146,229,189,1) 0%, rgba(241,238,51,1) 100%);
  };
`;
