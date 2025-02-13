import { styled } from '@mui/material/styles'
import { Box, Button, Container, Select, Typography } from '@mui/material'

export const FullHeightBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: theme.palette.blackLight.main,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const MainContent = styled(Box)(({ theme }) => ({
  height: '100vh',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    height: '100vh',
    minHeight: '600px', // Para asegurar una altura mínima en móviles pequeños
  },
}));

export const GradientOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
  zIndex: 1,
});

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:before': {
    borderColor: theme.palette.common.white,
  },
  '&:after': {
    borderColor: theme.palette.common.white,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
  },
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100%',
  paddingBottom: theme.spacing(18),
  paddingLeft: theme.spacing(6),
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  fontSize: '120px',
  lineHeight: '100px',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(4),
  letterSpacing: '16px',
  fontFamily: "'Bebas Neue', sans-serif",
  color: theme.palette.primary.main,
  maxWidth: '1200px',
  [theme.breakpoints.down('md')]: {
    fontSize: '76px',
    lineHeight: '76px',
    letterSpacing: '12px',
    marginBottom: theme.spacing(3),
    maxWidth: '90%',
    textAlign: 'center',
  },
}));

export const Stack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(3),
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    width: '100%',
    maxWidth: '248px',
    marginTop: theme.spacing(6),
    alignItems: 'center',
  },
}));

export const PlayButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.blackLight.main,
  color: theme.palette.common.white,
  padding: '16px 48px',
  fontSize: '18px',
  fontWeight: 'medium',
  borderRadius: '0',
  border: `1px solid ${theme.palette.customGrey.main}`,
  fontFamily: "'Bebas Neue', sans-serif",
  width: '248px',
  height: '56px',
  '&:hover': {
    backgroundColor: theme.palette.aqua.main,
    color: theme.palette.blackLight.main,
    border: 'none',
  },
  '& .MuiButton-startIcon': {
    marginRight: '12px',
    '& svg': {
      fontSize: '24px',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ListButton = styled(Button)(({ theme }) => ({
  padding: '16px 48px',
  fontSize: '18px',
  fontWeight: 'medium',
  borderRadius: '0',
  border: `1px solid ${theme.palette.customGrey.main}`,
  color: theme.palette.common.white,
  backgroundColor: 'transparent',
  fontFamily: "'Bebas Neue', sans-serif",
  width: '248px',
  height: '56px',
  '&:hover': {
    backgroundColor: theme.palette.customGrey.transparent,
    border: `1px solid ${theme.palette.customGrey.main}`,
  },
  '& .MuiButton-startIcon': {
    marginRight: '12px',
    '& svg': {
      fontSize: '24px',
    },
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
    maxWidth: '248px',
    alignItems: 'center',
  },
})); 