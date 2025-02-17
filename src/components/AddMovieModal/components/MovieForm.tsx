import { MovieTitleInput, UploadButton } from '../styles'

interface MovieFormProps {
  movieTitle: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

export function MovieForm({ 
  movieTitle, 
  disabled = false,
  onChange,
  onSubmit 
}: MovieFormProps) {
  return (
    <>
      <MovieTitleInput
        placeholder="TÍTULO"
        value={movieTitle}
        disabled={disabled}
        variant="standard"
        onChange={onChange}
        InputProps={{
          disableUnderline: true,
        }}
      />
      <UploadButton 
        disabled={disabled || !movieTitle}
        onClick={onSubmit}
      >
        SUBIR PELÍCULA
      </UploadButton>
    </>
  );
} 