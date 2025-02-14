import { styled } from '@mui/material/styles'
import { Box, Container } from '@mui/material'

export const SkeletonContainer = styled(Box)({
  height: '100vh',
  width: '100%',
  position: 'relative',
  backgroundColor: '#242424',
});

export const GradientOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
  zIndex: 1,
});

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

export const StyledContentContainer = styled(Container)({
  position: 'relative',
  zIndex: 2,
});

export const skeletonStyles = {
  backgroundColor: 'rgba(255,255,255,0.1)',
};

export const mainSkeletonStyles = {
  position: 'absolute',
  backgroundColor: 'rgba(255,255,255,0.1)',
};

export const titleSkeletonStyles = {
  backgroundColor: 'rgba(255,255,255,0.1)',
  marginBottom: 2,
};

export const subtitleSkeletonStyles = {
  backgroundColor: 'rgba(255,255,255,0.1)',
  marginBottom: 4,
};

export const buttonSkeletonStyles = {
  backgroundColor: 'rgba(255,255,255,0.1)',
}; 