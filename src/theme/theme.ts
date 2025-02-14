import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    aqua: Palette['primary']
    blackLight: {
      main: string
      darker: string
    }
    customGrey: {
      main: string
      transparent: string
    }
  }

  interface PaletteOptions {
    aqua?: PaletteOptions['primary']
    blackLight?: {
      main: string
      darker: string
    }
    customGrey?: {
      main: string
      transparent: string
    }
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-bebas-neue)',
    allVariants: {
      fontFamily: 'var(--font-bebas-neue)',
    },
  },
  palette: {
    aqua: {
      main: '#64EEBC',
    },
    blackLight: {
      main: '#242424',
      darker: '#171717',
    },
    customGrey: {
      main: '#FFFFFF',
      transparent: 'rgba(255, 255, 255, 0.5)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-bebas-neue)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-bebas-neue)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-bebas-neue)',
        },
      },
    },
  },
}) 