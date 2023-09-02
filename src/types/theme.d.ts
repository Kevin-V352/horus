import { type Theme, type ThemeOptions } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//  interface CustomTheme extends Theme {
//    customTheme: {
//      pallete: {
//        background: {
//          black_transparent_05: string;
//          black_transparent_02: string;
//        };
//      };
//    };
//  }
//  // allow configuration using `createTheme`
//  interface CustomThemeOptions extends ThemeOptions {
//    customTheme?: {
//      pallete?: {
//        background?: {
//          black_transparent_05?: string;
//          black_transparent_02?: string;
//        };
//      };
//    };
//  }
//  export function createTheme (options?: CustomThemeOptions): CustomTheme;
// }

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    customTheme: {
      pallete: {
        background: {
          black_transparent_05: string;
          black_transparent_02: string;
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    customTheme?: {
      pallete?: {
        background?: {
          black_transparent_05?: string;
          black_transparent_02?: string;
        };
      };
    };
  }
  export function createTheme (options?: CustomThemeOptions): CustomTheme;
}
