import { render, screen, fireEvent } from '@/test/test-utils'
import '@testing-library/jest-dom'
import PopularMovies from '../PopularMovies'
import { usePopularMovies, useMyMovies } from '@/hooks/useMovies'


jest.mock('@/hooks/useMovies', () => ({
  usePopularMovies: jest.fn(),
  useMyMovies: jest.fn(),
}));

const mockMovies = [
  {
    id: 1,
    originalTitle: 'Test Movie 1',
    posterUrl: '/test1.jpg',
    voteAverage: 7.5,
    releaseDate: '2024',
  },
  {
    id: 2,
    originalTitle: 'Test Movie 2',
    posterUrl: '/test2.jpg',
    voteAverage: 8.0,
    releaseDate: '2024',
  },
];

describe('PopularMovies', () => {
  beforeEach(() => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: mockMovies,
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    });
    
    (useMyMovies as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    });
  });

  it('renders popular movies list', () => {
    render(<PopularMovies />)
    
    expect(screen.getByText('VER:')).toBeInTheDocument()
    expect(screen.getByText('POPULARES')).toBeInTheDocument()
    expect(screen.getByText('Test Movie 1')).toBeInTheDocument()
    expect(screen.getByText('Test Movie 2')).toBeInTheDocument()
  });

  it('shows loading state', () => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      refetch: jest.fn(),
    });

    render(<PopularMovies />)
    
    expect(screen.getByTestId('popular-movies-skeleton')).toBeInTheDocument()
  });

  it('shows error state', () => {
    (usePopularMovies as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error('Failed to fetch'),
      refetch: jest.fn(),
    });

    render(<PopularMovies />)
    
    expect(screen.getByText(/error al cargar las películas populares/i)).toBeInTheDocument()
  });

  it('displays movie rating and year', () => {
    render(<PopularMovies />)
    
    const movieCard = screen.getByText('Test Movie 1')
    fireEvent.mouseEnter(movieCard)
    
    expect(screen.getByText('7.5')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  });
}); 