import { styled } from '@mui/material/styles'
import { Box, Typography, Select, MenuItem } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CheckIcon from '@mui/icons-material/Check'
import { motion } from 'framer-motion'

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
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.common.white,
  minWidth: 200,
  fontSize: '18px',
  letterSpacing: '4px',
  fontWeight: 'bold',
  '& .MuiSelect-select': {
    padding: '8px 16px',
    backgroundColor: 'transparent',
  },
  '&[aria-expanded="true"] .MuiSelect-select': {
    backgroundColor: theme.palette.blackLight.darker,
  },
  '&:before': {
    borderColor: 'transparent',
  },
  '&:after': {
    borderColor: 'transparent',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.common.white,
    right: 8,
    fontSize: '24px',
    transition: 'transform 0.2s ease',
  },
  '&[aria-expanded="true"] .MuiSvgIcon-root': {
    transform: 'rotate(180deg)',
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '18px',
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

export const MovieList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
  justifyContent: 'flex-start',
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

export const ClickableBox = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  overflow: 'hidden',
  cursor: 'pointer',
  zIndex: 1,
  borderRadius: '4px',
  backgroundColor: theme.palette.blackLight.main,
}));

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

export const DefaultContent = motion(styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
  cursor: 'pointer',
  zIndex: 2,
  '& .play-icon': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '& .movie-title': {
    position: 'absolute',
    bottom: '16px',
    left: 0,
    right: 0,
    textAlign: 'center',
  }
}));

export const MovieOverlay = motion(styled(Box)(({ theme }) => ({
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

export const MovieTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 'medium',
  fontSize: '16px',
  letterSpacing: '4px',
  textTransform: 'uppercase',
  width: '100%',
  padding: '0 16px',
}));

export const PlayIcon = styled(PlayArrowIcon)(({ theme }) => ({
  fontSize: '48px',
  color: theme.palette.common.white,
  opacity: 0.9,
  backgroundColor: 'rgba(36, 36, 36, 0.5)',
  borderRadius: '50%',
  padding: '8px',
  border: `2px solid ${theme.palette.common.white}`,
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.2s ease',
  },
}));

export const PlayIconWrapper = styled(Box)(({ theme }) => ({
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