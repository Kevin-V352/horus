import { type Theme, type ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    customTheme: {
      pallete: {
        background: {
          black_transparent_05: string;
          black_transparent_03: string;
          white: string;
        };
        typography: {
          battleship_grey: string;
          white: string;
        };
      };
      typography: {
        font_size_xxl:  string;
        font_size_xl:   string;
        font_size_lg:   string;
        font_size_md:   string;
        font_size_sm:   string;
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
          white?: string;
        };
        typography?: {
          battleship_grey?: string;
          white?: string;
        };
      };
      typography?: {
        font_size_xxl?:  string;
        font_size_xl?:   string;
        font_size_lg?:   string;
        font_size_md?:   string;
        font_size_sm?:   string;
      };
    };
  }
  export function createTheme (options?: CustomThemeOptions): CustomTheme;
}
