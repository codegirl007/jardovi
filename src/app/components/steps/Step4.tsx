'use client'

import {themeColors} from '@/theme/theme'
import PrimaryText from '../PrimaryText'

export default function Step4() {
  return (
    <PrimaryText
      text={
        <>
          Jo, a jasně že t nebudem hrotit responzivně.
          <br /> Pěkně utíkej k<span style={{color: themeColors.redContrast, marginLeft: '20px'}}>počítači</span>.
        </>
      }
    />
  )
}
