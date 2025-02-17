import { Box, Typography } from '@mui/material'

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography color="text.secondary">
        {message}
      </Typography>
    </Box>
  )
} 