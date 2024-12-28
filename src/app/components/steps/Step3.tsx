'use client'

import {themeColors} from '@/theme/theme'
import PrimaryText from '../PrimaryText'
import {useIsResponsive} from '@/providers/ResponsiveProvider'

export default function Step3() {
  const {isMobile} = useIsResponsive()
  return (
    <PrimaryText
      text={
        <>
          Takže následuj
          <span style={{color: themeColors.redContrast, marginLeft: isMobile ? '12px' : '20px'}}>instrukce</span>
          <br /> a pohodlně se usaď 😘.
        </>
      }
      maxWidth={isMobile ? '300px' : '750px'}
    />
  )
}
