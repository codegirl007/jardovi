'use client'

import {themeColors} from '@/theme/theme'
import PrimaryText from '../PrimaryText'
import {useIsResponsive} from '@/providers/ResponsiveProvider'

export default function Step2() {
  const {isMobile} = useIsResponsive()
  return (
    <PrimaryText
      text={
        <>
          Tahle aplikace neslouží uživateli, ale uživatel slouží
          <span style={{color: themeColors.redContrast, marginLeft: isMobile ? '12px' : '20px'}}>jí</span> 😈.
        </>
      }
      maxWidth={isMobile ? '300px' : '760px'}
    />
  )
}
