'use client'

import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SelectChangeEvent } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import StarIcon from '@mui/icons-material/Star'
import { ErrorView } from '@/components/common/ErrorView/ErrorView'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import {
  SidebarContainer,
  FilterHeader,
  FilterLabel,
  StyledSelect,
  StyledMenuItem,
  MovieImage,
  DefaultContent,
  MovieOverlay,
  MovieInfo,
  MovieInfoTop,
  MovieInfoBottom,
  MovieTitle,
  Rating,
  Year,
  PlayIcon,
  container,
  cardVariants,
  defaultContentAnimations,
  overlayAnimations,
  MotionMovieList,
  MotionClickableBox,
  selectMenuProps,
} from './styles'
import { PopularMoviesSkeleton } from '../Skeletons/PopularMoviesSkeleton'
import { usePopularMovies, useMyMovies } from '@/hooks/useMovies'
import { Box } from '@mui/material'

export default function PopularMovies() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<'POPULARES' | 'MIS_PELICULAS'>('POPULARES');

  const { 
    data: popularMovies, 
    isLoading: isLoadingPopular,
    error: popularError,
    refetch: refetchPopular,
  } = usePopularMovies()

  const { 
    data: myMovies, 
    isLoading: isLoadingMyMovies,
    error: myMoviesError,
    refetch: refetchMyMovies,
  } = useMyMovies(selectedOption === 'MIS_PELICULAS')

  const movies = useMemo(() => {
    const moviesData = selectedOption === 'POPULARES' ? popularMovies : myMovies
    return moviesData?.slice(0, 4)
  }, [selectedOption, popularMovies, myMovies])

  const isLoading = isLoadingPopular || isLoadingMyMovies
  const error = selectedOption === 'POPULARES' ? popularError : myMoviesError

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const handleOptionChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedOption(event.target.value as 'POPULARES' | 'MIS_PELICULAS');
  };

  const getCardState = (movieId: number) => {
    if (!hoveredId) return "initial"
    return hoveredId === movieId ? "hover" : "sibling"
  }

  const handleRetry = () => {
    if (selectedOption === 'POPULARES') {
      refetchPopular()
    } else {
      refetchMyMovies()
    }
  }

  const renderContent = () => {
    if (isLoading) {
      return <PopularMoviesSkeleton />
    }

    if (error) {
      return (
        <Box marginTop="230px">
          <ErrorView 
          message={
            selectedOption === 'POPULARES' 
              ? 'Error al cargar las películas populares' 
              : 'Error al cargar tus películas'
          }
          onRetry={handleRetry}
        />
        </Box>
      )
    }

    if (!movies?.length) {
      return (
        <EmptyState 
          message={
            selectedOption === 'POPULARES'
              ? 'No hay películas populares disponibles'
              : 'No has agregado ninguna película'
          }
        />
      )
    }

    return (
      <MotionMovieList
        variants={container}
        initial="hidden"
        animate="show"
      >
        {movies.map((movie) => (
          <MotionClickableBox 
            key={movie.id}
            variants={cardVariants}
            animate={getCardState(movie.id)}
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          >
            <MovieImage
              src={movie.posterUrl}
              alt={movie.originalTitle}
              loading="lazy"
            />
            <AnimatePresence>
              {hoveredId !== movie.id && (
                <DefaultContent {...defaultContentAnimations}>
                  <PlayIcon className="play-icon" />
                  <MovieTitle className="movie-title">{movie.originalTitle}</MovieTitle>
                </DefaultContent>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {hoveredId === movie.id && (
                <MovieOverlay {...overlayAnimations}>
                  <MovieInfo>
                    <MovieInfoTop>
                      <PlayIcon />
                      <MovieTitle>{movie.originalTitle}</MovieTitle>
                    </MovieInfoTop>
                    <MovieInfoBottom>
                      <Rating>
                        <StarIcon className="star-icon" />
                        {movie.voteAverage}
                      </Rating>
                      <Year>{movie.releaseDate}</Year>
                    </MovieInfoBottom>
                  </MovieInfo>
                </MovieOverlay>
              )}
            </AnimatePresence>
          </MotionClickableBox>
        ))}
      </MotionMovieList>
    )
  }

  return (
    <SidebarContainer>
      <FilterHeader>
        <FilterLabel>VER:</FilterLabel>
        <StyledSelect 
          value={selectedOption} 
          onChange={handleOptionChange}
          variant="standard"
          IconComponent={KeyboardArrowDownIcon}
          MenuProps={selectMenuProps}
        >
          <StyledMenuItem value="POPULARES">POPULARES</StyledMenuItem>
          <StyledMenuItem value="MIS_PELICULAS">MIS PELÍCULAS</StyledMenuItem>
        </StyledSelect>
      </FilterHeader>

      {renderContent()}
    </SidebarContainer>
  )
} 