'use client'

import {themeColors} from '@/theme/theme'
import PrimaryText from '../PrimaryText'

export default function Step1() {
  return (
    <PrimaryText
      text={
        <>
          Gratulujeme, <span style={{color: themeColors.redContrast}}>Jardo</span>🥳 !
        </>
      }
    />
  )
}
