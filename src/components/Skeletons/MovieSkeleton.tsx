'use client'

import { Skeleton } from '@mui/material'
import {
  SkeletonContainer,
  GradientOverlay,
  StyledContentContainer,
  ContentBox,
  mainSkeletonStyles,
  titleSkeletonStyles,
  subtitleSkeletonStyles,
  buttonSkeletonStyles,
} from './styles'
import { ButtonsContainer } from '@/components/HomePage/styles'

export function MovieSkeleton() {
  return (
    <SkeletonContainer>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="wave"
        sx={mainSkeletonStyles}
      />
      <GradientOverlay />
      <StyledContentContainer maxWidth="xl">
        <ContentBox>
          <Skeleton
            variant="text"
            width={200}
            height={30}
            sx={titleSkeletonStyles}
          />
          <Skeleton
            variant="text"
            width={600}
            height={120}
            sx={subtitleSkeletonStyles}
          />
          <ButtonsContainer>
            <Skeleton
              variant="rectangular"
              width={248}
              height={56}
              sx={buttonSkeletonStyles}
            />
            <Skeleton
              variant="rectangular"
              width={248}
              height={56}
              sx={buttonSkeletonStyles}
            />
          </ButtonsContainer>
        </ContentBox>
      </StyledContentContainer>
    </SkeletonContainer>
  )
} 