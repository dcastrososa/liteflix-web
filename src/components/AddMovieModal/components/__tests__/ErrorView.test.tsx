import { render, screen, fireEvent } from '@/test/test-utils'
import '@testing-library/jest-dom'
import { ErrorView } from '../ErrorView'

describe('ErrorView', () => {
  const mockOnRetry = jest.fn()
  const mockMovieTitle = 'Test Movie'
  const mockError = 'UNA PELICULA CON ESTE TITULO YA EXISTE PARA ESTE USUARIO'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders error message correctly', () => {
    render(<ErrorView movieTitle={mockMovieTitle} onRetry={mockOnRetry} error={mockError} />)
    
    expect(screen.getByText('¡ERROR!')).toBeInTheDocument()
    expect(screen.getByText(mockError)).toBeInTheDocument()
  })

  it('calls onRetry when retry button is clicked', () => {
    render(<ErrorView movieTitle={mockMovieTitle} onRetry={mockOnRetry} error={mockError} />)
    
    const retryButton = screen.getByText('REINTENTAR')
    fireEvent.click(retryButton)
    
    expect(mockOnRetry).toHaveBeenCalledTimes(1)
  })

  it('displays error progress bar', () => {
    render(<ErrorView movieTitle={mockMovieTitle} onRetry={mockOnRetry} error={mockError} />)
    
    const progressBar = screen.getByTestId('error-progress')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveAttribute('error', 'true')
  })
}) 