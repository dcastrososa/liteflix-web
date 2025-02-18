import { Box, Typography, styled } from '@mui/material'

export const EmptyContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: theme.spacing(4, 4, 0, 4),
    minHeight: '100px',
    width: '100%',
    marginTop: theme.spacing(4),
}))

export const EmptyMessage = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: '16px',
    letterSpacing: '4px',
    textAlign: 'center',
    opacity: 0.8,
    maxWidth: '300px',
    textTransform: 'uppercase',
}))