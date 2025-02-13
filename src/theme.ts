import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    blackLight: {
      main: string;
      darker: string;
    };
    aqua: {
      main: string;
    };
    customGrey: {
      main: string;
      transparent: string;
    };
  }
  interface PaletteOptions {
    blackLight: {
      main: string;
      darker: string;
    };
    aqua: {
      main: string;
    };
    customGrey: {
      main: string;
      transparent: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    blackLight: {
      main: '#242424',
      darker: '#242424',
    },
    aqua: {
      main: '#64EEBC',
    },
    customGrey: {
      main: '#808080',
      transparent: 'rgba(128, 128, 128, 0.3)',
    },
  },
  typography: {
    fontFamily: "'Bebas Neue', sans-serif",
    allVariants: {
      fontFamily: "'Bebas Neue', sans-serif",
      textTransform: 'uppercase',
      letterSpacing: 2,
    },
    h1: {
      fontFamily: "'Bebas Neue', sans-serif",
    },
    h2: {
      fontFamily: "'Bebas Neue', sans-serif",
    },
    h3: {
      fontFamily: "'Bebas Neue', sans-serif",
    },
    h4: {
      fontFamily: "'Bebas Neue', sans-serif",
    },
    h5: {
      fontFamily: "'Bebas Neue', sans-serif",
    },
    h6: {
      fontFamily: "'Bebas Neue', sans-serif",
    },
    button: {
      fontFamily: "'Bebas Neue', sans-serif",
      textTransform: 'uppercase',
    },
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Bebas Neue', sans-serif",
        },
      },
    },
  },
  // ... resto de la configuración del tema
}) 