'use client'

import { useState } from 'react'
import {
  Box,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import AddIcon from '@mui/icons-material/Add'
import { motion } from 'framer-motion'

import { Header } from '@/components/Header'
import {
  FullHeightBox,
  GradientOverlay,
  ContentContainer,
  MovieTitle,
  PlayButton,
  ListButton,
  ButtonsContainer,
} from './styles'
import { PopularMovies } from '@/components/PopularMovies'
import { AddMovieModal } from '@/components/AddMovieModal/AddMovieModal'
import { theme } from '@/theme'
import { useNowPlayingMovie } from '@/hooks/useMovies'
import { MovieSkeleton } from '@/components/Skeletons/MovieSkeleton'

const MainContent = styled(Box)({
  height: '100vh',
  position: 'relative',
  zIndex: 1,
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, 
    }
  }
}

const item = {
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

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)
const MotionMovieTitle = motion(MovieTitle)

export function HomeView() {
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false)

  const handleOpenModal = () => setIsAddMovieModalOpen(true)
  const handleCloseModal = () => setIsAddMovieModalOpen(false)

  const { data: nowPlayingMovie, isLoading } = useNowPlayingMovie()

  if (isLoading) {
    return (
      <>
        <Header onAddMovie={handleOpenModal} />
        <FullHeightBox>
          <MovieSkeleton />
          <PopularMovies />
        </FullHeightBox>
      </>
    )
  }

  return (
    <>
      <Header onAddMovie={handleOpenModal} />
      <FullHeightBox>
        <MainContent>
          <GradientOverlay />
          <Box
            component="img"
            src={nowPlayingMovie?.posterUrl}
            alt="Featured movie"
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <ContentContainer maxWidth="xl">
            <MotionBox
              variants={container}
              initial="hidden"
              animate="show"
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                width: '100%',
              }}
            >
              <MotionTypography
                variant="subtitle1"
                variants={item}
                sx={{
                  color: theme.palette.common.white,
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  opacity: 0.8,
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '20px',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                ORIGINAL DE <span style={{ fontWeight: 700 }}>LITEFLIX</span>
              </MotionTypography>
              
              <MotionMovieTitle variants={item}>
                {nowPlayingMovie?.originalTitle}
              </MotionMovieTitle>

              <MotionBox 
                variants={item}
                component={ButtonsContainer}
              >
                <PlayButton startIcon={<PlayArrowOutlinedIcon />}>
                  REPRODUCIR
                </PlayButton>
                <ListButton startIcon={<AddIcon />}>
                  MI LISTA
                </ListButton>
              </MotionBox>
            </MotionBox>
          </ContentContainer>
        </MainContent>
        <PopularMovies />
      </FullHeightBox>
      <AddMovieModal 
        isOpen={isAddMovieModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
} 