'use client'

import { Box, Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  ContentContainer,
  ButtonsContainer,
} from '@/app/components/styles'

const SkeletonContainer = styled(Box)({
  height: '100vh',
  width: '100%',
  position: 'relative',
  backgroundColor: '#242424',
});

const GradientOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
  zIndex: 1,
});

export function MovieSkeleton() {
  return (
    <SkeletonContainer>
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height="100%" 
        animation="wave"
        sx={{ position: 'absolute', backgroundColor: 'rgba(255,255,255,0.1)' }}
      />
      <GradientOverlay />
      <ContentContainer 
        maxWidth="xl" 
        sx={{ position: 'relative', zIndex: 2 }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          width: '100%',
        }}>
          <Skeleton
            variant="text"
            width={200}
            height={30}
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              marginBottom: 2,
            }}
          />
          <Skeleton
            variant="text"
            width={600}
            height={120}
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              marginBottom: 4,
            }}
          />
          <ButtonsContainer>
            <Skeleton
              variant="rectangular"
              width={248}
              height={56}
              sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            />
            <Skeleton
              variant="rectangular"
              width={248}
              height={56}
              sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            />
          </ButtonsContainer>
        </Box>
      </ContentContainer>
    </SkeletonContainer>
  )
} 