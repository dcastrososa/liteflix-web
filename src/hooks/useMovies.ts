import { useQuery } from '@tanstack/react-query'
import { moviesApi } from '@/api'

export const useNowPlayingMovie = () => {
  return useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: async () => {
      const { data } = await moviesApi.getNowPlaying()
      return data
    },
  })
} 

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: async () => {
      const { data } = await moviesApi.getPopular()

      return data
    },
  })
} 

export const useMyMovies = (enabled: boolean) => {
  return useQuery({
    queryKey: ['movies', 'my-movies'],
    queryFn: async () => {
      const { data } = await moviesApi.getMyMovies()
      return data
    },
    enabled,
  })
} 