import { styled } from '@mui/material/styles'
import { Box, Button, Typography, IconButton } from '@mui/material'
import { motion } from 'framer-motion'

export const menuAnimation = {
  initial: { x: -380 },
  animate: { x: 0 },
  exit: { x: -380 },
  transition: { 
    type: "spring", 
    damping: 30, 
    stiffness: 300 
  }
};

export const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const MenuTitle = styled(Typography)({
  fontSize: '18px',
  letterSpacing: '4px',
  opacity: 0.8,
});

export const MenuContainer = styled(motion(Box))(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '380px',
  height: '100vh',
  backgroundColor: theme.palette.blackLight.main,
  zIndex: 100,
  padding: '32px',
}));

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