import { styled } from '@mui/material/styles'
import { Box, Typography, Button } from '@mui/material'

export const HeaderContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  padding: '20px 40px',
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '16px 20px',
    justifyContent: 'space-between',
  },
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    order: 1,
  },
}));

export const HeaderLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  [theme.breakpoints.down('md')]: {
    order: 3,
    '& .notification-button': {
      display: 'none',
    },
    '& > *:not(:last-child)': {
      display: 'none',
    },
  },
}));

export const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '4px',
  marginRight: '40px',
  fontFamily: "'Bebas Neue', sans-serif",
  fontWeight: 400,
  '& span': {
    fontFamily: "'Bebas Neue', sans-serif",
  },
  [theme.breakpoints.down('md')]: {
    margin: 0,
    order: 2,
  },
}));

export const AddMovieButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '4px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  padding: '8px 0',
  fontFamily: "'Bebas Neue', sans-serif",
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .plus-icon': {
    fontSize: '18px',
    fontWeight: 'light',
    marginRight: theme.spacing(0.5),
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})); 