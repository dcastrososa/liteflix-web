import { Typography } from "@mui/material";
import { LoadingContainer, UploadButton } from "../styles";

interface SuccessViewProps {
  movieTitle: string;
  onClose: () => void;
}

export function SuccessView({ movieTitle, onClose }: SuccessViewProps) {
  return (
    <LoadingContainer>
      <Typography
        variant="h6"
        sx={{
          color: 'common.white',
          textAlign: 'center',
          letterSpacing: '4px',
          mb: 2,
        }}
      >
        ¡FELICITACIONES!
      </Typography>
      <Typography
        sx={{
          color: 'common.white',
          textAlign: 'center',
          letterSpacing: '4px',
          mb: 4,
        }}
      >
        {movieTitle} FUE CORRECTAMENTE SUBIDA.
      </Typography>
      <UploadButton onClick={onClose}>
        IR A HOME
      </UploadButton>
    </LoadingContainer>
  )
} 