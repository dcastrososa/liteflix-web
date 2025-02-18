import { StyledLogo, BoldSpan, RegularSpan } from './styles'

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <StyledLogo variant="h1" className={className}>
      <BoldSpan>LITE</BoldSpan>
      <RegularSpan>FLIX</RegularSpan>
    </StyledLogo>
  )
} 