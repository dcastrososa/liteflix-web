'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateMovieDto, moviesApi } from '@/api'
import CloseIcon from '@mui/icons-material/Close'
import { AnimatePresence } from 'framer-motion'
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  CloseButton
} from './styles'
import { UploadForm } from './components/UploadForm'
import { UploadProgress } from './components/UploadProgress'
import { SuccessView } from './components/SuccessView'
import { AxiosError } from 'axios'
import { modalContainerAnimation, modalContentAnimation } from './styles'
import type { FileWithPath } from 'react-dropzone'

interface AddMovieModalProps {
  isOpen: boolean
  onClose: () => void
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
}

export function AddMovieModal({ isOpen, onClose }: AddMovieModalProps) {
  const [movieTitle, setMovieTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)
  const queryClient = useQueryClient()

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: CreateMovieDto) =>
      moviesApi.create({ 
        ...data, 
      }, (progress) => setUploadProgress(progress)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies', 'my-movies'] })
      setIsSuccess(true)
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setError(error.response?.data?.message || 'Error al subir la película')
    },
  })

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    const file = acceptedFiles[0]

    if (file.size > MAX_FILE_SIZE) {
      setError('El archivo no debe superar los 5MB')
      return
    }

    setFile(file)
    setError(null)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxFiles: 1,
    multiple: false,
  })

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setMovieTitle('')
      setFile(null)
      setError(null)
      setUploadProgress(0)
      setIsSuccess(false)
    }, 300)
  }

  const handleRetry = () => {
    setError(null);
  };

  const handleSubmit = () => {
    if (!file) {
      setError('Debes seleccionar un poster')
      return
    }

    if (movieTitle.length < 3 || movieTitle.length > 250) {
      setError('El título debe tener entre 3 y 250 caracteres')
      return
    }

    mutate({
      title: movieTitle,
      poster: file,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContainer
          {...modalContainerAnimation}
        >
          <ModalContent
            {...modalContentAnimation}
          >
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            <ModalTitle>
              {isSuccess ? (
                <>
                  <span className="bold">LITE</span>FLIX
                </>
              ) : (
                'AGREGAR PELÍCULA'
              )}
            </ModalTitle>

            {!isLoading && !isSuccess ? (
              <UploadForm
                file={file}
                movieTitle={movieTitle}
                error={error}
                onDrop={onDrop}
                onTitleChange={(value) => setMovieTitle(value)}
                onSubmit={handleSubmit}
                onRetry={handleRetry}
                getRootProps={getRootProps}
                getInputProps={getInputProps}
                isDragActive={isDragActive}
              />
            ) : isSuccess ? (
              <SuccessView
                movieTitle={movieTitle}
                onClose={handleClose}
              />
            ) : (
              <UploadProgress
                progress={uploadProgress}
                movieTitle={movieTitle}
              />
            )}
          </ModalContent>
        </ModalContainer>
      )}
    </AnimatePresence>
  )
} 