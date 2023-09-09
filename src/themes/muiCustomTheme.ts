import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight:  ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily
  },
  customTheme: {
    pallete: {
      background: {
        black_transparent_03: 'rgba(0, 0, 0, 0.3)',
        black_transparent_05: 'rgba(0, 0, 0, 0.5)'
      },
      typography: {
        battleship_grey: '#868585',
        white:           '#FFF'
      }
    },
    typography: {
      font_size_1: '3.3rem',
      font_size_2: '2rem',
      font_size_3: '1.3rem',
      font_size_4: '1rem'
    }
  }
});

export default theme;