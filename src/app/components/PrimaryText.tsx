'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {Typography, TypographyProps} from '@mui/material'
import {ReactNode} from 'react'

interface Props extends TypographyProps {
  text: string | ReactNode
}

export default function PrimaryText({text, ...props}: Props) {
  const {isMobile} = useIsResponsive()
  return (
    <Typography
      color="white"
      fontFamily={isMobile ? 'Borda-demibold' : 'Borda'}
      fontSize={isMobile ? '28px' : '68px'}
      fontWeight={isMobile ? 400 : 700}
      lineHeight={isMobile ? '38px' : '78px'}
      maxWidth={850}
      textAlign="center"
      sx={{
        cursor: 'default',
        '@media (min-height: 500px) and (max-height: 700px) and (min-width: 960px)': {
          fontSize: '48px',
          lineHeight: '54px'
        }
      }}
      {...props}
    >
      {text}
    </Typography>
  )
}
