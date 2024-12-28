'use client'

import {themeColors} from '@/theme/theme'
import PrimaryText from '../PrimaryText'

export default function Step2() {
  return (
    <PrimaryText
      text={
        <>
          Přejeme ti všechno nejlepší k
          <span style={{color: themeColors.redContrast, marginLeft: '20px'}}>narozeninám</span> 🎂.
        </>
      }
    />
  )
}
