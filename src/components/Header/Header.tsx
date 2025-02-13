'use client'

import {
  IconButton,
  Avatar,
  Button,
  Box,
} from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Menu } from '../Menu/Menu'
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  Logo,
  AddMovieButton,
  MenuContainer,
} from './styles'
import { CustomMenuIcon } from './MenuIcon'

interface HeaderProps {
  onAddMovie: () => void
}

export function Header({ onAddMovie }: HeaderProps) {
  return (
    <HeaderContainer>
      <MenuContainer>
        <Menu onAddMovie={onAddMovie} MenuIcon={CustomMenuIcon} />
      </MenuContainer>
      
      <HeaderLeft>
        <Logo variant="h1">
          <span style={{ fontWeight: 700 }}>LITE</span>
          <span style={{ fontWeight: 400 }}>FLIX</span>
        </Logo>
        <AddMovieButton onClick={onAddMovie}>
          <span className="plus-icon">+</span>
          AGREGAR PELÍCULA
        </AddMovieButton>
      </HeaderLeft>

      <Logo variant="h1" sx={{ display: { xs: 'block', md: 'none' } }}>
        <span style={{ fontWeight: 700 }}>LITE</span>
        <span style={{ fontWeight: 400 }}>FLIX</span>
      </Logo>

      <HeaderRight>
        <Menu onAddMovie={onAddMovie} MenuIcon={CustomMenuIcon} />
        <IconButton 
          className="notification-button"
          sx={{ 
            color: 'common.white',
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}
        >
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 28 }} />
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: 'aqua.main',
              borderRadius: '50%',
              position: 'absolute',
              top: 6,
              right: 6,
            }}
          />
        </IconButton>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: 'common.white',
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }
          }}
        >
          <Box
            component="img"
            src="https://s3-alpha-sig.figma.com/img/d5f3/e4f4/d4d299851f3c2a9c6b9bae7b292a6f0b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EME5yJ61khPN8MC7nURdjiLiIcGIQGtAh44E77UkXZPZwU0mL~h0AStN-8sopa8OxH~cgKh6100NxxqV~k31d~POWaqRgNkijntjm1j3YJYx0-MOh~WXXbIr3iy6TVW2i3cEGliotF~7TqwpN~8o9CQM27ATnrlAhTKCUIszLPc1INRldmmj55N0SiFGqvBt91ydAxoeP8RM29LfoeQUdXzW5u9XpJs~z0Eeuzar1BWr~pXPvtjSc2loFajPo5oJEQodS2UDnXoIdaiLgDDkkFY27BxCpoQ3pO93TEUjAfjNAIBfUbUmCz4rvm7hM8ZojJdCnwir5g-azjBJAj8-Qg__"
            alt="User avatar"
            width="100%"
            height="100%"
          />
        </Avatar>
      </HeaderRight>
    </HeaderContainer>
  )
} 