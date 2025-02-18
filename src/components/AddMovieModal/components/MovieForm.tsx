import { MovieTitleInput, UploadButton, FormContainer } from '../styles'

interface MovieFormProps {
  movieTitle: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  disabled?: boolean;
}

export function MovieForm({ movieTitle, onChange, onSubmit, disabled }: MovieFormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormContainer>
      <MovieTitleInput
        value={movieTitle}
        onChange={handleChange}
        placeholder="TÍTULO"
        disabled={disabled}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />
      {!disabled && (
        <UploadButton
          onClick={onSubmit}
          disabled={!movieTitle}
        >
          SUBIR PELÍCULA
        </UploadButton>
      )}
    </FormContainer>
  );
} 