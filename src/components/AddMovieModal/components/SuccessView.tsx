import { 
  UploadButton,
  SuccessTitle,
  SuccessMessage,
  SuccessContainer,
} from "../styles";
import { Box } from '@mui/material';
import { ModalLayout } from "./Layout";

interface SuccessViewProps {
  movieTitle: string;
  onClose: () => void;
}

export function SuccessView({ movieTitle, onClose }: SuccessViewProps) {
  return (
    <ModalLayout
      header={
        <SuccessTitle>
          ¡FELICITACIONES!
        </SuccessTitle>
      }
      content={
        <SuccessMessage>
          {movieTitle} FUE CORRECTAMENTE SUBIDA.
        </SuccessMessage>
      }
      footer={
        <UploadButton onClick={onClose}>
          IR A HOME
        </UploadButton>
      }
    />
  );
} 