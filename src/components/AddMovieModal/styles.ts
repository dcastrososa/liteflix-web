import { styled } from '@mui/material/styles'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'

export const modalContainerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const modalContentAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
}

export const ModalContainer = styled(motion(Box))({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const ModalContent = styled(motion(Box))(({ theme }) => ({
  backgroundColor: theme.palette.blackLight.main,
  padding: '72px 48px',
  position: 'relative',
  width: '100%',
  maxWidth: '730px',
  margin: theme.spacing(0, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
}));

export const ModalTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.aqua.main,
  fontSize: '20px',
  letterSpacing: '4px',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  color: theme.palette.common.white,
}));

export const DropZone = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '90px',
  border: `2px dashed ${theme.palette.customGrey.main}`,
  borderRadius: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  cursor: 'pointer',
  padding: '24px',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
    fontSize: '24px',
    transform: 'rotate(45deg)',
  },
}));

export const DropZoneText = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '16px',
  letterSpacing: '4px',
  textAlign: 'center',
  maxWidth: '100%',
  lineHeight: '1.5',
}));

export const MovieTitleInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: '248px',
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
    fontSize: '16px',
    letterSpacing: '4px',
    textAlign: 'center',
    padding: '8px 0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '1px',
    backgroundColor: theme.palette.customGrey.main,
  },
  '& .MuiInputBase-root': {
    '&::before': {
      display: 'none',
    },
    '&::after': {
      display: 'none',
    },
  },
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.customGrey.main,
  color: theme.palette.blackLight.main,
  padding: '16px 48px',
  fontSize: '18px',
  letterSpacing: '4px',
  borderRadius: '0',
  width: '248px',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.customGrey.main,
    color: theme.palette.blackLight.main,
    opacity: 0.5,
  },
}));

export const LoadingContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
});

export const LoadingText = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '20px',
  letterSpacing: '4px',
  textAlign: 'center',
}));

export const ProgressBar = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '4px',
  backgroundColor: theme.palette.customGrey.main,
  position: 'relative',
}));

export const Progress = styled(Box)<{ progress: number }>(({ progress, theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: `${progress}%`,
  backgroundColor: theme.palette.aqua.main,
  transition: 'width 0.3s ease',
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  letterSpacing: '4px',
  marginTop: '24px',
  padding: '8px 0',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
}));

export const SuccessTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: 'center',
  letterSpacing: '4px',
  marginBottom: theme.spacing(2),
}));

export const SuccessMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: 'center',
  letterSpacing: '4px',
  marginBottom: theme.spacing(4),
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: 'center',
  marginTop: theme.spacing(2),
})); 