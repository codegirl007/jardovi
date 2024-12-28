'use client'

import {Button, ButtonProps, styled} from '@mui/material'
import {ReactNode} from 'react'

const Styled = {
  Button: styled(Button)({
    backgroundColor: '#DCBD97',
    color: 'black',
    textTransform: 'uppercase',
    fontSize: '13px',
    letterSpacing: 1.95,
    fontFamily: 'Borda-extrabold',
    borderRadius: '11px',
    height: 54,
    padding: '0 35px',
    '&.Mui-disabled': {
      opacity: 0.3,
      background: '#DCBD97',
      color: 'black',
      fontFamily: 'Borda-extrabold',
      borderRadius: '11px',
      textTransform: 'uppercase',
      fontSize: '13px',
      letterSpacing: 1.95,
      fontWeight: 800,
      padding: '0 35px'
    }
  })
}

interface Props extends ButtonProps {
  children: ReactNode
}

export default function CustomButton({children, ...props}: Props) {
  return (
    <Styled.Button variant="contained" {...props}>
      {children}
    </Styled.Button>
  )
}
