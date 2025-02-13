import { api } from './config'

export interface Movie {
  id: number;
  originalTitle: string;
  posterUrl: string;
  voteAverage?: number;
  releaseDate?: string;
}

export interface CreateMovieDto {
  title: string;
  poster: File;
}

export const moviesApi = {
  getNowPlaying: () => {
    return api.get<Movie>('/movies/now-playing')
  },

  getPopular: () => {
    return api.get<Movie[]>('/movies/popular')
  },

  getMyMovies: () => {
    return api.get<Movie[]>('/movies/my-movies')
  },

  create: (data: CreateMovieDto, onProgress?: (progress: number) => void) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('poster', data.poster);

    return api.post<Movie>('/movies', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress?.(progress);
        }
      },
    })
  },
} 