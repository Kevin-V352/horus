import { styled, Box, TextField, Autocomplete, LinearProgress } from '@mui/material';

export const SearchBoxModalMainContent = styled(Box)`
  position:  absolute;
  top:       20%;
  left:      50%;
  transform: translate(-50%, -50%);
`;

export const SearchBoxModalAutocomplete = styled(Autocomplete)((props) => ({
  '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
    // @ts-expect-error unknow error
    color:        props.theme.customTheme.pallete.typography.white,
    padding:      '15px 10px',
    borderRadius: '4px',

    '&:hover': {
      // @ts-expect-error unknow error
      backgroundColor: props.theme.customTheme.pallete.background.white_transparent_03
    }
  },
  '& .MuiAutocomplete-popupIndicator': {
    // @ts-expect-error unknow error
    color: props.theme.customTheme.pallete.typography.white
  },
  '& .MuiAutocomplete-clearIndicator': {
    // @ts-expect-error unknow error
    color: props.theme.customTheme.pallete.typography.white
  }
}));

export const SearchBoxModalLocationInput = styled(TextField)((props) => ({
  '& label': {
    // @ts-expect-error unknow error
    color: props.theme.customTheme.pallete.typography.white
  },
  '& label.Mui-focused': {
    // @ts-expect-error unknow error
    color: props.theme.customTheme.pallete.typography.white
  },
  '& .Mui-error': {
    // color: styledTheme.text.error,

    '& .MuiOutlinedInput-notchedOutline': {
      // borderColor: styledTheme.border.error
    }
  },
  '& .MuiFormHelperText-root': {
    // color: styledTheme.text.error
  },
  '& .MuiOutlinedInput-root': {
    // @ts-expect-error unknow error
    color: props.theme.customTheme.pallete.typography.white,
    width: '400px',

    '& fieldset': {
      // @ts-expect-error unknow error
      borderColor: props.theme.customTheme.pallete.typography.white
    },
    '&:hover fieldset': {
      // @ts-expect-error unknow error
      borderColor: props.theme.customTheme.pallete.typography.white
    },
    '&.Mui-focused fieldset': {
      // @ts-expect-error unknow error
      borderColor: props.theme.customTheme.pallete.typography.white
    },
    '& :-webkit-autofill': {
      // @ts-expect-error unknow error
      WebkitBoxShadow:     `0 0 0 100px ${props.theme.customTheme.pallete.typography.white} inset`,
      WebkitTextFillColor: 'red'
    }
  }
}));

export const SearchBoxModalAutocompleteLinearProgress = styled(LinearProgress)((props) => ({
  // @ts-expect-error unknow error
  backgroundColor: props.theme.customTheme.pallete.background.white_transparent_03,
  borderRadius:    '10px',

  '& .MuiLinearProgress-barColorPrimary': {
    // @ts-expect-error unknow error
    backgroundColor: props.theme.customTheme.pallete.background.white
  }
}));

export const SearchBoxModalAutocompleteListBox = styled('div')`
  max-height: none !important;
`;

export const SearchBoxModalAutocompleteOption = styled('li')`
  align-items: center;
  display: flex;
  gap: 10px;
`;
