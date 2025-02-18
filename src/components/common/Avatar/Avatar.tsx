import { AvatarContainer, AvatarImage } from './styles'

interface AvatarProps {
  className?: string;
}

export function Avatar({ className }: AvatarProps) {
  return (
    <AvatarContainer className={className}>
      <AvatarImage
        src="https://s3-alpha-sig.figma.com/img/d5f3/e4f4/d4d299851f3c2a9c6b9bae7b292a6f0b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EME5yJ61khPN8MC7nURdjiLiIcGIQGtAh44E77UkXZPZwU0mL~h0AStN-8sopa8OxH~cgKh6100NxxqV~k31d~POWaqRgNkijntjm1j3YJYx0-MOh~WXXbIr3iy6TVW2i3cEGliotF~7TqwpN~8o9CQM27ATnrlAhTKCUIszLPc1INRldmmj55N0SiFGqvBt91ydAxoeP8RM29LfoeQUdXzW5u9XpJs~z0Eeuzar1BWr~pXPvtjSc2loFajPo5oJEQodS2UDnXoIdaiLgDDkkFY27BxCpoQ3pO93TEUjAfjNAIBfUbUmCz4rvm7hM8ZojJdCnwir5g-azjBJAj8-Qg__"
        alt="User avatar"
      />
    </AvatarContainer>
  )
} 