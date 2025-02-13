import { SvgIcon, SvgIconProps } from '@mui/material'

export function CustomMenuIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h12v2H3z" />
    </SvgIcon>
  )
} 