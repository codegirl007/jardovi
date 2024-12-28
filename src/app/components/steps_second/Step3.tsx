'use client'

import {themeColors} from '@/theme/theme'
import PrimaryText from '../PrimaryText'
import Image from 'next/image'
import {Stack} from '@mui/material'

export default function Step3() {
  return (
    <Stack gap="30px" direction="row">
      <PrimaryText
        text={
          <>
            Děkujeme za všechny společné<span style={{color: themeColors.redContrast, marginLeft: '20px'}}>akce</span>,
            za tvoji energii a drive a za to že s tebou můžeme být
            <br />
            <span style={{color: themeColors.redContrast, marginLeft: '20px'}}>on the edge</span>.
          </>
        }
      />
      <Image src={'/data/photo.jpg'} alt="photo" width={300} height={400} style={{transform: 'rotate(10deg)'}} />
    </Stack>
  )
}
