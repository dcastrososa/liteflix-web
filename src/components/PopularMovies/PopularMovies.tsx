'use client'

import { useState, useMemo } from 'react'
import StarIcon from '@mui/icons-material/Star'
import { AnimatePresence, motion } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { SelectChangeEvent } from '@mui/material'

import {
  SidebarContainer,
  FilterHeader,
  FilterLabel,
  StyledSelect,
  MovieList,
  MovieTitle,
  PlayIcon,
  MovieInfo,
  Rating,
  Year,
  DefaultContent,
  MovieOverlay,
  ClickableBox,
  MovieInfoTop,
  MovieInfoBottom,
  MovieImage,
  StyledMenuItem,
  selectMenuProps,
  defaultContentAnimations,
  overlayAnimations,
} from './styles'
import { usePopularMovies, useMyMovies } from '@/hooks/useMovies'
import { PopularMoviesSkeleton } from '../Skeletons/PopularMoviesSkeleton'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const cardVariants = {
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

const MotionMovieList = motion(MovieList)
const MotionClickableBox = motion(ClickableBox)

export default function PopularMovies() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<'POPULARES' | 'MIS_PELICULAS'>('POPULARES');

  const { data: popularMovies, isLoading: isLoadingPopular } = usePopularMovies()
  const { data: myMovies, isLoading: isLoadingMyMovies } = useMyMovies(
    selectedOption === 'MIS_PELICULAS'
  )

  const movies = useMemo(() => {
    const moviesData = selectedOption === 'POPULARES' ? popularMovies : myMovies
    return moviesData?.slice(0, 5)
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