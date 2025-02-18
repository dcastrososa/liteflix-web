import { render, screen } from '@/test/test-utils'
import '@testing-library/jest-dom'
import { SuccessView } from '../SuccessView'

describe('SuccessView', () => {
  const mockMovieTitle = 'Test Movie'
  const mockOnClose = jest.fn()

  it('renders success message correctly', () => {
    render(<SuccessView movieTitle={mockMovieTitle} onClose={mockOnClose} />)
    
    expect(screen.getByText('¡FELICITACIONES!')).toBeInTheDocument()
    expect(screen.getByText((content) => 
      content.includes('TEST MOVIE') && content.includes('FUE CORRECTAMENTE SUBIDA.')
    )).toBeInTheDocument()
  })

  it('displays movie title in uppercase', () => {
    render(<SuccessView movieTitle="test movie" onClose={mockOnClose} />)
    
    expect(screen.getByText((content) => 
      content.includes('TEST MOVIE') && content.includes('FUE CORRECTAMENTE SUBIDA.')
    )).toBeInTheDocument()
  })
}) 