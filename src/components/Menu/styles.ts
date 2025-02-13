import { styled } from '@mui/material/styles'
import { Box, Button, Typography, IconButton } from '@mui/material'
import { motion } from 'framer-motion'

export const MenuButton = styled(IconButton)({
  color: 'white',
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
});

export const MenuTitle = styled(Typography)({
  fontSize: '18px',
  letterSpacing: '4px',
  opacity: 0.8,
});

export const MenuContainer = motion(styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '380px',
  height: '100vh',
  backgroundColor: theme.palette.blackLight.main,
  zIndex: 1000,
  boxShadow: '4px 0 12px rgba(0,0,0,0.5)',
})));

export const MenuContent = styled(Box)({
  padding: '120px 40px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const MenuItem = styled(Typography)({
  color: 'white',
  fontSize: '22px',
  letterSpacing: '4px',
  cursor: 'pointer',
  opacity: 0.6,
  transition: 'opacity 0.2s',
  '&:hover': {
    opacity: 1,
  },
});

export const AddMovieButton = styled(Button)({
  color: 'white',
  fontSize: '18px',
  letterSpacing: '4px',
  marginTop: '24px',
  padding: '16px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  justifyContent: 'flex-start',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
  '&::before': {
    content: '"+  "',
    fontSize: '24px',
    fontWeight: 'light',
  }
});

export const LogoutButton = styled(Button)({
  color: 'white',
  fontSize: '18px',
  letterSpacing: '4px',
  opacity: 0.6,
  marginTop: 'auto',
  padding: '16px 0',
  '&:hover': {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: '24px',
  right: '24px',
  color: 'white',
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
}); 