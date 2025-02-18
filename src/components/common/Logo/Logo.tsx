import { StyledLogo } from './styles'

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <StyledLogo variant="h1" className={className}>
      <span style={{ fontWeight: 700 }}>LITE</span>
      <span style={{ fontWeight: 400, marginLeft: '8px' }}>FLIX</span>
    </StyledLogo>
  )
} 