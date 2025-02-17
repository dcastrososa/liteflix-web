import { 
  LoadingText,
  ProgressBar,
  Progress,
  RetryButton,
} from '../styles'
import { MovieForm } from './MovieForm';
import { ModalLayout } from './Layout';

interface ErrorViewProps {
  movieTitle: string;
  onRetry: () => void;
  error: string | null;
}

export function ErrorView({ movieTitle, onRetry, error }: ErrorViewProps) {
  return (
    <ModalLayout
      header={
        <LoadingText>
          {error || 'UNA PELICULA CON ESTE TITULO YA EXISTE PARA ESTE USUARIO'}
        </LoadingText>
      }
      content={
        <>
          <ProgressBar>
            <Progress progress={100} error="true" />
          </ProgressBar>
          <RetryButton onClick={onRetry}>
            REINTENTAR
          </RetryButton>
        </>
      }
      footer={
        <MovieForm 
          movieTitle={movieTitle}
          disabled
        />
      }
    />
  );
} 