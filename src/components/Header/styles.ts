import { styled } from '@mui/material/styles'
import { Box, Typography, Button, IconButton, Avatar } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

export const HeaderContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  padding: '20px 40px',
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '16px 20px',
    justifyContent: 'space-between',
  },
}));

export const MenuContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    order: 1,
  },
}));

export const HeaderLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
  [theme.breakpoints.down('md')]: {
    order: 3,
    '& .notification-button': {
      display: 'none',
    },
    '& > *:not(:last-child)': {
      display: 'none',
    },
  },
}));

export const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.aqua.main,
  fontSize: '34px',
  lineHeight: '34px',
  letterSpacing: '4px',
  marginRight: '40px',
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    margin: 0,
    order: 2,
  },
}));

export const AddMovieButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '4px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  padding: '8px 0',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .plus-icon': {
    fontSize: '18px',
    fontWeight: 'light',
    marginRight: theme.spacing(0.5),
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const MobileLogo = styled(Logo)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const NotificationButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const NotificationIcon = styled(NotificationsNoneOutlinedIcon)({
  fontSize: 28,
});

export const NotificationDot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  backgroundColor: theme.palette.aqua.main,
  borderRadius: '50%',
  position: 'absolute',
  top: 6,
  right: 6,
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  bgcolor: theme.palette.common.white,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const AvatarImage = styled('img')({
  width: '100%',
  height: '100%',
}); 