import { Box, Typography, Button } from '@mui/material'

interface ErrorViewProps {
  message: string;
  onRetry: () => void;
}

export function ErrorView({ message, onRetry }: ErrorViewProps) {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography color="error" mb={2}>
        {message}
      </Typography>
      <Button onClick={onRetry} variant="outlined" color="primary">
        Reintentar
      </Button>
    </Box>
  )
} 