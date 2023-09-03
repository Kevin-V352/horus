import { styled, LinearProgress, Typography, Grid } from '@mui/material';

export const CustomGridContainer = styled(Grid)((props) => ({
  // @ts-expect-error unknow error
  color: props.theme.customTheme.pallete.typography.white
}));

export const CustomTypography = styled(Typography)((props) => ({
  // @ts-expect-error unknow error
  fontSize: props.theme.customTheme.typography.font_size_3
}));

export const GradientLinearProgress = styled(LinearProgress)`
  background-color: #868585;
  border-radius: 10px;
  
  & .MuiLinearProgress-barColorPrimary {
    background: linear-gradient(90deg, rgba(146,229,189,1) 0%, rgba(241,238,51,1) 100%);
  };
`;
