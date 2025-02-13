import { Typography } from "@mui/material";
import { DropZone, DropZoneText, UploadButton, MovieTitleInput } from "../styles";
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

interface UploadFormProps {
  file: File | null;
  movieTitle: string;
  error: string | null;
  onDrop: (files: File[]) => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  getRootProps: () => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
}

export function UploadForm({
  file,
  movieTitle,
  error,
  onTitleChange,
  onSubmit,
  getRootProps,
  getInputProps,
}: UploadFormProps) {
  return (
    <>
      <DropZone {...getRootProps()}>
        <input {...getInputProps()} />
        <AttachFileIcon />
        <DropZoneText>
          {file ? file.name : 'AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ'}
        </DropZoneText>
      </DropZone>

      {error && (
        <Typography
          sx={{
            color: 'error.main',
            textAlign: 'center',
            mt: 2,
          }}
        >
          {error}
        </Typography>
      )}

      <MovieTitleInput
        placeholder="TÍTULO"
        value={movieTitle}
        onChange={onTitleChange}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />

      <UploadButton 
        disabled={!file || !movieTitle}
        onClick={onSubmit}
      >
        SUBIR PELÍCULA
      </UploadButton>
    </>
  )
} 