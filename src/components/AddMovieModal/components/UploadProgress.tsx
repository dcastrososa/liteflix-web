import { Typography } from "@mui/material";
import { theme } from "@/theme";
import { LoadingContainer, Progress, ProgressBar, LoadingText, CancelButton } from "../styles";

interface UploadProgressProps {
  progress: number;
  onCancel: () => void;
}

export function UploadProgress({ progress, onCancel }: UploadProgressProps) {
  return (
    <LoadingContainer>
      <LoadingText>{progress}% CARGADO</LoadingText>
      <ProgressBar>
        <Progress progress={progress} />
      </ProgressBar>
      {progress === 100 && (
        <Typography
          sx={{
            color: theme.palette.aqua.main,
            textAlign: 'center',
            letterSpacing: '4px',
            mt: 2,
          }}
        >
          ¡LISTO!
        </Typography>
      )}
      <CancelButton onClick={onCancel}>
        CANCELAR
      </CancelButton>
    </LoadingContainer>
  )
} 