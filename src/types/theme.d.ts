import { type Theme, type ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    customTheme: {
      pallete: {
        background: {
          black_transparent_05: string;
          black_transparent_03: string;
          battleship_grey: string;
        };
        typography: {
          battleship_grey: string;
          white: string;
        };
      };
      typography: {
        font_size_1: string;
        font_size_2: string;
        font_size_3: string;
        font_size_4: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    customTheme?: {
      pallete?: {
        background?: {
          black_transparent_05?: string;
          black_transparent_03?: string;
          battleship_grey?: string;
        };
        typography?: {
          battleship_grey?: string;
          white?: string;
        };
      };
      typography?: {
        font_size_1?: string;
        font_size_2?: string;
        font_size_3?: string;
        font_size_4?: string;
      };
    };
  }
  export function createTheme (options?: CustomThemeOptions): CustomTheme;
}
