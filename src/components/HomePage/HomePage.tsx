'use client'

import { useState } from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import AddIcon from '@mui/icons-material/Add'

import { Header } from '@/components/Header'
import {
  FullHeightBox,
  GradientOverlay,
  ContentContainer,
  PlayButton,
  ListButton,
  container,
  item,
  MotionMovieTitle,
  MotionButtonsContainer,
  MainContent,
  MovieImage,
  AnimatedContentBox,
  MovieSubtitle,
  BoldText,
  NormalText,
} from './styles'
import { PopularMovies } from '@/components/PopularMovies'
import { AddMovieModal } from '@/components/AddMovieModal/AddMovieModal'
import { useNowPlayingMovie } from '@/hooks/useMovies'
import { MovieSkeleton } from '@/components/Skeletons/MovieSkeleton'
import { ErrorView } from '@/components/common/ErrorView/ErrorView'

export function HomePage() {
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false)

  const handleOpenModal = () => setIsAddMovieModalOpen(true)
  const handleCloseModal = () => setIsAddMovieModalOpen(false)

  const { 
    data: nowPlayingMovie, 
    isLoading,
    error,
    refetch 
  } = useNowPlayingMovie()

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

  if (error) {
    return (
      <>
        <Header onAddMovie={handleOpenModal} />
        <FullHeightBox>
          <MainContent>
            <GradientOverlay />
            <ContentContainer maxWidth="xl">
              <ErrorView 
                message="Error al cargar la película destacada"
                onRetry={refetch}
              />
            </ContentContainer>
          </MainContent>
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
          <MovieImage
            src={nowPlayingMovie?.posterUrl}
            alt="Featured movie"
          />

          <ContentContainer maxWidth="xl">
            <AnimatedContentBox
              variants={container}
              initial="hidden"
              animate="show"
            >
              <MovieSubtitle
                variant="subtitle1"
                variants={item}
              >
                ORIGINAL DE <BoldText>LITE</BoldText><NormalText>FLIX</NormalText>
              </MovieSubtitle>

              <MotionMovieTitle variants={item}>
                {nowPlayingMovie?.originalTitle}
              </MotionMovieTitle>

              <MotionButtonsContainer variants={item}>
                <PlayButton startIcon={<PlayArrowOutlinedIcon />}>
                  REPRODUCIR
                </PlayButton>
                <ListButton startIcon={<AddIcon />}>
                  MI LISTA
                </ListButton>
              </MotionButtonsContainer>
            </AnimatedContentBox>
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