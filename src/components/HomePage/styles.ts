import { styled } from '@mui/material/styles'
import { Box, Button, Container, Select, Typography } from '@mui/material'
import { motion } from 'framer-motion'

export const FullHeightBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  backgroundColor: theme.palette.blackLight.main,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '@media (max-height: 700px)': {
    minHeight: '100%',
  },
}));

export const MainContent = styled(Box)({
  height: '100vh',
  position: 'relative',
  zIndex: 1,
  '@media (max-height: 700px)': {
    height: '600px',
  },
});

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
  '@media (max-height: 700px)': {
    paddingBottom: theme.spacing(8),
    justifyContent: 'center',
  },
}));

export const MovieTitle = styled(Typography)(({ theme }) => ({
  fontSize: '120px',
  lineHeight: '100px',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(4),
  letterSpacing: '16px',
  color: theme.palette.aqua.main,
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
  lineHeight: '21.6px',
  fontWeight: 400,
  letterSpacing: '4px',
  borderRadius: '0',
  border: `1px solid ${theme.palette.customGrey.main}`,
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
  fontWeight: '400',
  letterSpacing: '4px',
  lineHeight: '21.6px',
  borderRadius: '0',
  border: `1px solid ${theme.palette.customGrey.main}`,
  color: theme.palette.common.white,
  backgroundColor: 'transparent',
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
  '@media (max-height: 700px)': {
    gap: theme.spacing(2),
  },
}));

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const MotionBox = motion.create(Box)
export const MotionTypography = motion.create(Typography)
export const MotionMovieTitle = styled(motion.create(Box))(({ theme }) => ({
  color: theme.palette.aqua.main,
  fontSize: '120px',
  letterSpacing: '16px',
  lineHeight: '120px',
  textTransform: 'uppercase',
  marginBottom: '24px',
  maxWidth: 'calc(100% - 400px)',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    fontSize: '56px',
    letterSpacing: '8px',
    lineHeight: '56px',
    marginBottom: '16px',
    textAlign: 'center',
  },
  '@media (max-width: 360px)': {
    fontSize: '48px',
    letterSpacing: '6px',
    lineHeight: '48px',
  },
  '@media (max-height: 700px)': {
    fontSize: '72px',
    lineHeight: '72px',
    letterSpacing: '10px',
    marginBottom: '16px',
  },
}));
export const MotionButtonsContainer = motion.create(ButtonsContainer)

export const MovieImage = styled('img')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const AnimatedContentBox = styled(MotionBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [`${theme.breakpoints.up('md')}`]: {
    alignItems: 'flex-start',
  },
  [`${theme.breakpoints.down('md')}`]: {
    alignItems: 'center',
  },
}));

export const MovieSubtitle = styled(MotionTypography)(({ theme }) => ({
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
  letterSpacing: '4px',
  opacity: 0.8,
  fontSize: '20px',
  lineHeight: '20px',
  '@media (max-height: 700px)': {
    fontSize: '18px',
    marginBottom: theme.spacing(1),
  },
  [`${theme.breakpoints.up('md')}`]: {
    textAlign: 'left',
  },
  [`${theme.breakpoints.down('md')}`]: {
    textAlign: 'center',
  },
}));

export const BoldText = styled('span')({
  fontWeight: 700,
});

export const NormalText = styled('span')({
  fontWeight: 400,
}); 