import { styled, Typography } from '@mui/material'

export const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.aqua.main,
  fontSize: '34px',
  lineHeight: '34px',
  letterSpacing: '4px',
  fontWeight: 400,
}));

export const BoldSpan = styled('span')({
  fontWeight: 700,
});

export const RegularSpan = styled('span')({
  fontWeight: 400,
}); 