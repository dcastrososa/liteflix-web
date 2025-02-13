import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    aqua: {
      main: string;
    };
    blackLight: {
      main: string;
      darker: string;
    };
    customGrey: {
      main: string;
      transparent: string;
    };
  }
  interface PaletteOptions {
    aqua: {
      main: string;
    };
    blackLight: {
      main: string;
      darker: string;
    };
    customGrey: {
      main: string;
      transparent: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#64EEBC',
    },
    aqua: {
      main: '#64EEBC',
    },
    blackLight: {
      main: '#242424',
      darker: '#171717',
    },
    customGrey: {
      main: 'rgba(255, 255, 255, 0.6)',
      transparent: 'rgba(255, 255, 255, 0.1)',
    },
    common: {
      black: '#242424',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Bebas Neue', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Bebas Neue', sans-serif",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Bebas Neue', sans-serif",
        },
      },
    },
  },
});