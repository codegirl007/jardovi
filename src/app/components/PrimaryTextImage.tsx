'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import Image from 'next/image'

interface Props {
  src: string
}

export default function PrimaryTextImage({src}: Props) {
  const {isMobile} = useIsResponsive()
  return (
    <Image
      src={src}
      alt="globe"
      priority
      width={isMobile ? 26 : 58}
      height={isMobile ? 26 : 58}
      style={{
        marginRight: isMobile ? '8px' : '20px',
        marginLeft: isMobile ? '8px' : '20px',
        position: 'relative',
        bottom: isMobile ? -3 : -8
      }}
    />
  )
}
