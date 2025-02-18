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
  UserAvatar,
  AvatarImage,
} from './styles'
import { CustomMenuIcon } from './MenuIcon'
import { Logo as CustomLogo } from '@/components/common/Logo/Logo'

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
        <UserAvatar>
          <AvatarImage
            src="https://s3-alpha-sig.figma.com/img/d5f3/e4f4/d4d299851f3c2a9c6b9bae7b292a6f0b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EME5yJ61khPN8MC7nURdjiLiIcGIQGtAh44E77UkXZPZwU0mL~h0AStN-8sopa8OxH~cgKh6100NxxqV~k31d~POWaqRgNkijntjm1j3YJYx0-MOh~WXXbIr3iy6TVW2i3cEGliotF~7TqwpN~8o9CQM27ATnrlAhTKCUIszLPc1INRldmmj55N0SiFGqvBt91ydAxoeP8RM29LfoeQUdXzW5u9XpJs~z0Eeuzar1BWr~pXPvtjSc2loFajPo5oJEQodS2UDnXoIdaiLgDDkkFY27BxCpoQ3pO93TEUjAfjNAIBfUbUmCz4rvm7hM8ZojJdCnwir5g-azjBJAj8-Qg__"
            alt="User avatar"
          />
        </UserAvatar>
      </HeaderRight>
    </HeaderContainer>
  )
} 