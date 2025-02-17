import { Progress, ProgressBar, LoadingText } from "../styles";
import { MovieForm } from './MovieForm';
import { ModalLayout } from './Layout';

interface UploadProgressProps {
  progress: number;
  movieTitle: string;
}

export function UploadProgress({ progress, movieTitle }: UploadProgressProps) {
  return (
    <ModalLayout
      header={
        <LoadingText>
          {progress === 100 ? 'LISTO!' : `${progress}% CARGADO`}
        </LoadingText>
      }
      content={
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
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