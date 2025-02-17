import { 
  DropZone,
  DropZoneText,
  MovieTitleInput,
  UploadButton,
  ErrorMessage,
  LoadingContainer,
  LoadingText,
  ProgressBar,
  Progress,
  RetryButton,
  ErrorHeader,
} from '../styles'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';
import { ErrorView } from './ErrorView'
import { ModalLayout } from './Layout'
import { MovieForm } from './MovieForm'

interface UploadFormProps {
  file: File | null;
  movieTitle: string;
  error: string | null;
  onDrop: (files: File[]) => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onRetry: () => void;
  getRootProps: () => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
}

export function UploadForm({
  file,
  movieTitle,
  error,
  onTitleChange,
  onSubmit,
  onRetry,
  getRootProps,
  getInputProps,
}: UploadFormProps) {
  if (error) {
    return <ErrorView movieTitle={movieTitle} onRetry={onRetry} error={error} />;
  }

  return (
    <ModalLayout
      header={null}
      content={
        <DropZone {...getRootProps()}>
          <input {...getInputProps()} />
          <AttachFileIcon />
          <DropZoneText className="desktop-text">
            {file ? file.name : 'AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ'}
          </DropZoneText>
          <DropZoneText className="mobile-text">
            {file ? file.name : 'AGREGA UN ARCHIVO'}
          </DropZoneText>
        </DropZone>
      }
      footer={
        <MovieForm 
          movieTitle={movieTitle}
          onChange={onTitleChange}
          onSubmit={onSubmit}
        />
      }
    />
  );
} 