'use client'

import { useState, useMemo } from 'react'
import { MenuItem, Box } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import StarIcon from '@mui/icons-material/Star'
import { AnimatePresence, motion } from 'framer-motion'
import { useHasMounted } from '@/hooks/useHasMounted'
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
} from './styles'
import { usePopularMovies, useMyMovies } from '@/hooks/useMovies'
import { PopularMoviesSkeleton } from '../Skeletons/PopularMoviesSkeleton'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Cada hijo aparecerá con 0.1s de diferencia
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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

  const handleOptionChange = (event: SelectChangeEvent<string>) => {
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
          MenuProps={{
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
          }}
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
            variants={item}
            animate={getCardState(movie.id)}
            variants={cardVariants}
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              transformOrigin: 'center',
              willChange: 'transform, filter',
            }}
          >
            <MovieImage
              src={movie.posterUrl}
              alt={movie.originalTitle}
              loading="lazy"
            />
            <AnimatePresence>
              {hoveredId !== movie.id && (
                <DefaultContent
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <PlayIcon className="play-icon" />
                  <MovieTitle className="movie-title">{movie.originalTitle}</MovieTitle>
                </DefaultContent>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {hoveredId === movie.id && (
                <MovieOverlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
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