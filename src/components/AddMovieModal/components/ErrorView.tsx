import { 
  ProgressBar,
  Progress,
  RetryButton,
  ErrorHeader,
  ErrorTitle,
  ErrorMessage,
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
        <ErrorHeader>
          <ErrorTitle>¡ERROR!</ErrorTitle>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorHeader>
      }
      content={
        <>
          <ProgressBar>
            <Progress 
              progress={100} 
              error="true"
              data-testid="error-progress"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
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
          onChange={() => {}}
        />
      }
    />
  );
} 