'use client'

import { Box, Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  SidebarContainer,
  FilterHeader,
  FilterLabel,
  StyledSelect,
  MovieList,
  StyledMenuItem,
} from '../PopularMovies/styles'

const MovieSkeleton = styled(Box)({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  marginBottom: '8px',
});

export function PopularMoviesSkeleton() {
  return (
    <SidebarContainer>
      <FilterHeader>
        <FilterLabel>VER:</FilterLabel>
        <StyledSelect 
          value="POPULARES" 
          variant="standard"
          IconComponent={KeyboardArrowDownIcon}
          disabled
        >
          <StyledMenuItem value="POPULARES">POPULARES</StyledMenuItem>
        </StyledSelect>
      </FilterHeader>

      <MovieList>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieSkeleton key={index}>
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                position: 'absolute',
              }}
            />
            <Box sx={{ 
              position: 'absolute', 
              bottom: 16, 
              left: 16, 
              right: 16,
              zIndex: 1,
            }}>
              <Skeleton
                variant="text"
                width={120}
                height={24}
                sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              />
            </Box>
          </MovieSkeleton>
        ))}
      </MovieList>
    </SidebarContainer>
  )
} 