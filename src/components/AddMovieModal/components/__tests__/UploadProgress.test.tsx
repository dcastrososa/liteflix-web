import { render, screen } from '@/test/test-utils'
import '@testing-library/jest-dom'
import { UploadProgress } from '../UploadProgress'

describe('UploadProgress', () => {
  const mockMovieTitle = 'Test Movie'

  it('renders loading state correctly', () => {
    render(<UploadProgress progress={50} movieTitle={mockMovieTitle} />)
    
    expect(screen.getByText('50% CARGADO')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByDisplayValue(mockMovieTitle)).toBeInTheDocument()
  })

  it('renders complete state correctly', () => {
    render(<UploadProgress progress={100} movieTitle={mockMovieTitle} />)
    
    expect(screen.getByText('LISTO!')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('disables movie form input', () => {
    render(<UploadProgress progress={50} movieTitle={mockMovieTitle} />)
    
    const input = screen.getByDisplayValue(mockMovieTitle)
    expect(input).toBeDisabled()
  })

  it('shows correct progress in progress bar', () => {
    render(<UploadProgress progress={75} movieTitle={mockMovieTitle} />)
    
    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveAttribute('aria-valuenow', '75')
  })
}) 