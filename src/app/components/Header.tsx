'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {Stack} from '@mui/material'
import Image from 'next/image'

export default function Header() {
  const {isMobile} = useIsResponsive()

  return (
    <>
      <Stack
        direction="row"
        width="100%"
        paddingX={isMobile ? '20px' : '86px'}
        position="absolute"
        top={isMobile ? 32 : 55}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src="/global.svg"
          alt="globe"
          priority
          width={51}
          height={50}
          style={{cursor: 'pointer', zIndex: 9999}}
          onClick={() => window.open('https://edgy.digital/', '_blank')}
        />
        <Image
          src="/logo.svg"
          alt="logo"
          priority
          width={isMobile ? 140 : 204}
          height={isMobile ? 30.38 : 44}
          style={{zIndex: 9999}}
        />
        <Image
          src="/mail.svg"
          alt="mail"
          priority
          width={51}
          height={50}
          style={{cursor: 'pointer', zIndex: 9999}}
          onClick={() => window.open('https://edgy.digital/kontakt', '_blank')}
        />
      </Stack>
    </>
  )
}
