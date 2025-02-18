import { styled } from '@mui/material/styles'

export const AvatarContainer = styled('div')({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const AvatarImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}); 