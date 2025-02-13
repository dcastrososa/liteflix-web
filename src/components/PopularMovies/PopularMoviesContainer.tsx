'use client'

import dynamic from 'next/dynamic'

const PopularMoviesWithNoSSR = dynamic(() => import('./PopularMovies'), {
  ssr: false
})

export function PopularMoviesContainer() {
  return <PopularMoviesWithNoSSR />
} 