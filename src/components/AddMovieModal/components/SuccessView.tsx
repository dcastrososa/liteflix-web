import { 
  LoadingContainer, 
  UploadButton,
  SuccessTitle,
  SuccessMessage,
} from "../styles";

interface SuccessViewProps {
  movieTitle: string;
  onClose: () => void;
}

export function SuccessView({ movieTitle, onClose }: SuccessViewProps) {
  return (
    <LoadingContainer>
      <SuccessTitle variant="h6">
        ¡FELICITACIONES!
      </SuccessTitle>
      <SuccessMessage>
        {movieTitle} FUE CORRECTAMENTE SUBIDA.
      </SuccessMessage>
      <UploadButton onClick={onClose}>
        IR A HOME
      </UploadButton>
    </LoadingContainer>
  )
} 