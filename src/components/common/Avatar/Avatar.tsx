import { AvatarContainer, AvatarImage } from './styles'

interface AvatarProps {
  className?: string;
}

export function Avatar({ className }: AvatarProps) {
  return (
    <AvatarContainer className={className}>
      <AvatarImage
        src="https://res.cloudinary.com/dnsighkvx/image/upload/v1740414149/lshlxqxxdrmiaokbkfig.png"
        alt="User avatar"
      />
    </AvatarContainer>
  )
} 