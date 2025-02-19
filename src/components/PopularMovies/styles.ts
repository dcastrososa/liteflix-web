import { styled } from '@mui/material/styles'
import { Box, Typography, Select, MenuItem } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { motion } from 'framer-motion'

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const cardVariants = {
  initial: {
    scale: 1,
    zIndex: 1,
    filter: 'brightness(1)',
  },
  hover: {
    scale: 1.1,
    zIndex: 2,
    filter: 'brightness(1.1)',
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
  sibling: {
    scale: 0.95,
    zIndex: 1,
    filter: 'brightness(0.7)',
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  }
}

export const overlayAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export const defaultContentAnimations = {
  initial: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export const selectMenuProps = {
  PaperProps: {
    sx: {
      backgroundColor: '#171717',
      borderRadius: '4px',
      marginTop: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      '& .MuiList-root': {
        padding: 0,
      },
    },
  },
  MenuListProps: {
    sx: {
      backgroundColor: 'transparent',
    }
  }
};

export const MovieList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  [theme.breakpoints.down('md')]: {
    overflowY: 'visible',
    height: 'auto',
  },
}));

export const ClickableBox = styled(Box)({
  position: 'relative',
  cursor: 'pointer',
  width: '220px',
  height: '146px',
  overflow: 'hidden',
  zIndex: 1,
  borderRadius: '4px',
  backgroundColor: 'black',
});

export const MovieImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const DefaultContent = styled(Box)({
  position: 'absolute',
  bottom: 16,
  left: 16,
  right: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  zIndex: 1,
  
  '& .play-icon': {
    fontSize: 48,
    opacity: 1,
  },
});

export const MovieOverlay = motion.create(styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(36, 36, 36, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 2,
})));

export const MovieInfo = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  pointerEvents: 'none',
});

export const MovieInfoTop = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
});

export const MovieInfoBottom = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const Rating = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  color: theme.palette.common.white,
  fontSize: '18px',
  fontWeight: 'medium',
  '& .star-icon': {
    color: theme.palette.aqua.main,
    fontSize: '18px',
  }
}));

export const Year = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  fontWeight: 'medium',
  opacity: 0.8,
}));

export const MovieTitle = styled(Typography)({
  color: '#fff',
  fontSize: '16px',
  lineHeight: '16px',
  letterSpacing: '4px',
  fontWeight: 400,
  textAlign: 'center',
  width: '100%',
  textTransform: 'uppercase',
});

export const PlayIcon = styled(PlayArrowIcon)(({ theme }) => ({
  fontSize: '48px',
  color: theme.palette.common.white,
  opacity: 0.9,
  backgroundColor: 'rgba(36, 36, 36, 0.5)',
  borderRadius: '50%',
  padding: '8px',
  border: `2px solid ${theme.palette.common.white}`,
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const PlayIconWrapper = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

export const MovieCardContainer = styled(Box)({
  position: 'relative',
  '&:hover': {
    '& .overlay': {
      opacity: 1,
    },
    '& .play-icon': {
      transform: 'scale(1.1)',
    }
  }
});

export const MotionMovieList = motion.create(MovieList)
export const MotionClickableBox = motion.create(ClickableBox)

export const SidebarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100vh',
  width: '380px',
  padding: theme.spacing(4),
  paddingRight: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

export const FilterHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '12px',
  marginBottom: '40px',
  marginTop: '64px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    marginTop: '24px',
    marginBottom: '24px',
  },
}));

export const FilterLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.6,
  fontSize: '18px',
  letterSpacing: '4px',
  lineHeight: '18px',
  fontWeight: '400',
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.common.white,
  maxWidth: '194px',
  fontSize: '18px',
  letterSpacing: '4px',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  '& .MuiSelect-select': {
    padding: '8px 32px 8px 16px',
    backgroundColor: 'transparent !important',
  },
  '& .MuiSelect-root': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.MuiOutlinedInput-root': {
    backgroundColor: 'transparent !important',
  },
  '&:before, &:after': {
    display: 'none',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
    right: 0,
    fontSize: '24px',
    transition: 'transform 0.2s ease',
  },
  '&[aria-expanded="true"] .MuiSvgIcon-root': {
    transform: 'rotate(180deg)',
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: '18px',
  letterSpacing: '4px',
  padding: '12px 16px',
  backgroundColor: theme.palette.blackLight.darker,
  color: theme.palette.customGrey.main,
  fontWeight: 'normal',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.blackLight.main,
  },
  '&.Mui-selected': {
    backgroundColor: `${theme.palette.blackLight.darker} !important`,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.blackLight.main,
    },
    '&::after': {
      content: '""',
      width: '24px',
      height: '24px',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    }
  },
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.customGrey.transparent}`,
  },
})); 