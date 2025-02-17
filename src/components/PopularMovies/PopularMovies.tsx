'use client'

import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SelectChangeEvent } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import StarIcon from '@mui/icons-material/Star'

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
import { usePopularMovies, useMyMovies } from '@/hooks/useMovies'
import { PopularMoviesSkeleton } from '../Skeletons/PopularMoviesSkeleton'

export default function PopularMovies() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<'POPULARES' | 'MIS_PELICULAS'>('POPULARES');

  const { data: popularMovies, isLoading: isLoadingPopular } = usePopularMovies()
  const { data: myMovies, isLoading: isLoadingMyMovies } = useMyMovies(
    selectedOption === 'MIS_PELICULAS'
  )

  const movies = useMemo(() => {
    const moviesData = selectedOption === 'POPULARES' ? popularMovies : myMovies
    return moviesData?.slice(0, 4)
  }, [selectedOption, popularMovies, myMovies])

  const isLoading = isLoadingPopular || isLoadingMyMovies

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

  if (isLoading) {
    return <PopularMoviesSkeleton />
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

      <MotionMovieList
        variants={container}
        initial="hidden"
        animate="show"
      >
        {movies?.map((movie) => (
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
    </SidebarContainer>
  )
} 