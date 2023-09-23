import { styled, Stack } from '@mui/material';

export const ForecastContainer = styled(Stack)(() => ({
  gap:       '20px',
  overflowX: 'scroll'
}));

export const ForecastItem = styled(Stack)((props) => ({
  // @ts-expect-error unknow error
  color:      props.theme.customTheme.pallete.typography.white,
  gap:        '20px',
  alignItems: 'center'
}));
