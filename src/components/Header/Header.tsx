'use client'

import { Menu } from '../Menu/Menu'
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  DesktopLogo,
  AddMovieButton,
  MenuContainer,
  MobileLogo,
  NotificationButton,
  NotificationIcon,
  NotificationDot,
} from './styles'
import { CustomMenuIcon } from './MenuIcon'
import { Logo as CustomLogo } from '@/components/common/Logo/Logo'
import { Avatar } from '../common/Avatar/Avatar'

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
        <DesktopLogo>
          <CustomLogo />
        </DesktopLogo>
        <AddMovieButton onClick={onAddMovie}>
          <span className="plus-icon">+</span>
          AGREGAR PELÍCULA
        </AddMovieButton>
      </HeaderLeft>

      <MobileLogo>
        <CustomLogo />
      </MobileLogo>

      <HeaderRight>
        <Menu onAddMovie={onAddMovie} MenuIcon={CustomMenuIcon} />
        <NotificationButton className="notification-button">
          <NotificationIcon />
          <NotificationDot />
        </NotificationButton>
        <Avatar />
      </HeaderRight>
    </HeaderContainer>
  )
} 