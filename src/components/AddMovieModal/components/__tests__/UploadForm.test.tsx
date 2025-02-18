import { render, screen, fireEvent } from '@/test/test-utils'
import '@testing-library/jest-dom'
import { UploadForm } from '../UploadForm'

describe('UploadForm', () => {
  const mockOnDrop = jest.fn()
  const mockOnTitleChange = jest.fn()
  const mockOnSubmit = jest.fn()
  const mockGetRootProps = jest.fn().mockReturnValue({})
  const mockGetInputProps = jest.fn().mockReturnValue({})

  const defaultProps = {
    onDrop: mockOnDrop,
    onTitleChange: mockOnTitleChange,
    onSubmit: mockOnSubmit,
    movieTitle: '',
    isDragActive: false,
    isValid: false,
    file: null,
    error: null,
    onRetry: jest.fn(),
    getRootProps: mockGetRootProps,
    getInputProps: mockGetInputProps,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders dropzone with correct text', () => {
    render(<UploadForm {...defaultProps} />)
    
    expect(screen.getByText('AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ')).toBeInTheDocument()
  })

  it('shows different text when drag is active', () => {
    render(<UploadForm {...defaultProps} isDragActive={true} />)
    
    // Buscamos específicamente en el elemento desktop
    expect(screen.getByText('AGREGA UN ARCHIVO', { selector: '.desktop-text' })).toBeInTheDocument()
  })

  it('enables submit button when form is valid', () => {
    render(<UploadForm {...defaultProps} isValid={true} movieTitle="Test Movie" />)
    
    const submitButton = screen.getByText('SUBIR PELÍCULA')
    expect(submitButton).not.toBeDisabled()
  })

  it('disables submit button when form is invalid', () => {
    render(<UploadForm {...defaultProps} isValid={false} />)
    
    const submitButton = screen.getByText('SUBIR PELÍCULA')
    expect(submitButton).toBeDisabled()
  })

  it('calls onSubmit when form is submitted', () => {
    render(<UploadForm {...defaultProps} isValid={true} movieTitle="Test Movie" />)
    
    const submitButton = screen.getByText('SUBIR PELÍCULA')
    fireEvent.click(submitButton)
    
    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })
}) 