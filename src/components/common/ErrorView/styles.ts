import { Box, Typography, styled, Button } from '@mui/material'

export const ErrorContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    height: '100%',
}))

export const ErrorMessage = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
    fontSize: '24px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    textAlign: 'center',
    opacity: 0.8,
}))

export const RetryButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.blackLight.main,
    color: theme.palette.common.white,
    padding: '16px 48px',
    fontSize: '18px',
    lineHeight: '21.6px',
    fontWeight: 400,
    letterSpacing: '4px',
    borderRadius: '0',
    border: `1px solid ${theme.palette.customGrey.main}`,
    width: '248px',
    height: '56px',
    '&:hover': {
        backgroundColor: theme.palette.aqua.main,
        color: theme.palette.blackLight.main,
        border: 'none',
    },
}))