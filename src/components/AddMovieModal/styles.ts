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
  width: '730px',
  height: '440px',
  margin: theme.spacing(0, 2),
  position: 'relative',
  boxSizing: 'border-box',
  '@media (max-width: 600px)': {
    height: 'auto',
    maxHeight: '90vh',
  },
}));

export const ModalTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.aqua.main,
  fontSize: '20px',
  letterSpacing: '4px',
  lineHeight: '20px',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginBottom: '48px',
  position: 'absolute',
  top: '28px',
  left: '48px',
  right: '48px',
  '& .bold': {
    fontWeight: 900,
  },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  padding: 0,
  color: theme.palette.common.white,
  zIndex: 1,
}));

export const DropZone = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100px',
  border: `2px dashed ${theme.palette.customGrey.main}`,
  borderRadius: '0',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  cursor: 'pointer',
  padding: '24px',
  boxSizing: 'border-box',
  transition: 'background-color 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    height: '80px',
    flexDirection: 'column',
    gap: '8px',
  },
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
  lineHeight: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    letterSpacing: '2px',
    lineHeight: '14px',
    '&.desktop-text': {
      display: 'none',
    },
    '&.mobile-text': {
      display: 'block',
    },
  },
  [theme.breakpoints.up('sm')]: {
    '&.desktop-text': {
      display: 'block',
    },
    '&.mobile-text': {
      display: 'none',
    },
  },
}));

export const MovieTitleInput = styled(TextField)(({ theme }) => ({
  width: '248px',
  '& .MuiInputBase-input': {
    color: theme.palette.customGrey.transparent,
    fontSize: '16px',
    letterSpacing: '4px',
    textAlign: 'center',
    padding: '8px 0',
    height: '24px',
    lineHeight: '24px',
  },
  '& .MuiInputBase-root.Mui-disabled': {
    '&::before': {
      borderBottomStyle: 'solid',
      borderBottomColor: theme.palette.customGrey.main,
      borderBottomWidth: '1px',
    },
    '&:hover::before': {
      borderBottomColor: theme.palette.customGrey.main,
    },
    '& .MuiInputBase-input': {
      color: theme.palette.common.white,
      WebkitTextFillColor: theme.palette.common.white,
      opacity: 0.5,
      padding: '8px 0',
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
  marginBottom: '24px',
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.customGrey.main,
  color: theme.palette.blackLight.main,
  padding: '16px 48px',
  fontSize: '18px',
  letterSpacing: '4px',
  borderRadius: '0',
  width: '248px',
  height: '56px',
  whiteSpace: 'nowrap',
  '&.Mui-disabled': {
    backgroundColor: theme.palette.customGrey.transparent,
    color: theme.palette.customGrey.transparent,
  },
}));

export const LoadingContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  marginBottom: '96px',
  flex: 1,
  gap: '48px',
});

export const SuccessContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
});

export const ErrorHeader = styled(Box)({
  width: '100%',
  position: 'relative',
  marginBottom: '72px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const LoadingText = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '20px',
  letterSpacing: '4px',
  textAlign: 'left',
  alignSelf: 'flex-start',
  marginTop: '28px',
}));

export const ProgressBarContainer = styled(Box)({
  width: '100%',
  position: 'relative',
  marginBottom: '48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const ProgressBar = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '4px',
  backgroundColor: theme.palette.customGrey.main,
  position: 'relative',
}));

export const Progress = styled(Box)<{ progress: number; error?: string }>(
  ({ progress, error, theme }) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: `${progress}%`,
    backgroundColor: error === 'true' ? '#FF0000' : theme.palette.aqua.main,
    transition: 'width 0.3s ease',
  })
);

export const CancelButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  letterSpacing: '4px',
  marginTop: '24px',
  padding: '8px 0',
  alignSelf: 'center',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
}));

export const SuccessTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: 'center',
  letterSpacing: '4px',
  marginBottom: theme.spacing(1),
  fontSize: '24px',
  lineHeight: '26px',
  width: '100%',
  marginTop: '45px',
  '& span': {
    fontWeight: 900,
  },
}));

export const SuccessMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: 'center',
  letterSpacing: '4px',
  marginBottom: theme.spacing(4),
  fontSize: '20px',
  lineHeight: '20px',
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: 'center',
  marginTop: theme.spacing(2),
}));

export const ErrorContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
  position: 'relative',
});

export const ErrorTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '20px',
  letterSpacing: '4px',
  textAlign: 'left',
  marginBottom: '24px',
}));

export const ErrorProgressBar = styled(Box)(({ theme }) => ({
  width: '602px',
  height: '4px',
  backgroundColor: '#FF0000',
  marginBottom: '24px',
}));

export const RetryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  letterSpacing: '4px',
  padding: 0,
  minWidth: 'auto',
  backgroundColor: 'transparent',
  alignSelf: 'flex-end',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.8,
  },
})); 