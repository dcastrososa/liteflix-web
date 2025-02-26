import { styled } from '@mui/material/styles'
import { Box, Button, Typography, IconButton } from '@mui/material'
import { motion } from 'framer-motion'

export const menuAnimation = {
  initial: { 
    x: '100%',
    opacity: 0 
  },
  animate: { 
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  },
  exit: { 
    x: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
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

export const MenuContainer = styled(motion.create(Box))(({ theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: theme.palette.blackLight.main,
  zIndex: 1000,
  [theme.breakpoints.up('md')]: {
    width: '33%',
    minWidth: '400px',
  },
  [theme.breakpoints.down('sm')]: {
    overflowY: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const MenuContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(12, 6),
  gap: theme.spacing(3),
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 4),
    gap: theme.spacing(2),
    minHeight: 'min-content',
  },
}));

export const MenuItem = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '22px',
  letterSpacing: '4px',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.aqua.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    letterSpacing: '3px',
  },
}));

export const AddMovieButton = styled(Button)(({ theme }) => ({
  color: theme.palette.aqua.main,
  fontSize: '18px',
  letterSpacing: '4px',
  marginTop: 'auto',
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    letterSpacing: '3px',
    marginTop: theme.spacing(4),
  },
}));

export const LogoutButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  letterSpacing: '4px',
  padding: theme.spacing(2, 0),
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    letterSpacing: '3px',
    marginBottom: theme.spacing(4),
  },
}));

export const MobileHeader = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    width: '100%',
  }
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  color: 'white',
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
  [theme.breakpoints.down('md')]: {
    position: 'static',
  }
})); 