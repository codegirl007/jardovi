'use client'

import {themeColors} from '@/theme/theme'
import {Stack, SvgIcon} from '@mui/material'
import PrimaryText from '../PrimaryText'
import CustomButton from '../buttons/CustomButton'
import {downloadFile} from '../helpers'

export default function Step4() {
  const onDownload = async () => {
    const fileUrl = '/data/gift.jpg'
    try {
      await downloadFile(fileUrl, 'darek')

      console.log('success')
    } catch (error) {
      console.log(error)
    }
  }
  const DownloadIcon = () => {
    return (
      <SvgIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2.02637V16.0264" stroke="url(#paint0_linear_5061_22638)" strokeLinejoin="round" />
        <path d="M0 16.0264H18" stroke="url(#paint1_linear_5061_22638)" strokeLinejoin="round" />
        <path d="M13 11.0264L9 16.0264L5 11.0264" stroke="url(#paint2_linear_5061_22638)" strokeLinejoin="round" />
        <defs>
          <linearGradient
            id="paint0_linear_5061_22638"
            x1="9"
            y1="9.02637"
            x2="8"
            y2="9.02637"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.865" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_5061_22638"
            x1="9"
            y1="16.0264"
            x2="9"
            y2="17.0264"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.865" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_5061_22638"
            x1="13"
            y1="13.5264"
            x2="5"
            y2="13.5264"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.865" stopColor="white" />
          </linearGradient>
        </defs>
      </SvgIcon>
    )
  }
  return (
    <Stack gap="40px" alignItems="center">
      <PrimaryText
        text={
          <>
            Tady máš od nás<span style={{color: themeColors.redContrast, marginLeft: '20px'}}>dárek</span>
          </>
        }
      />
      <CustomButton
        sx={{bgcolor: themeColors.redContrast, color: 'white', maxWidth: 'max-content'}}
        endIcon={<DownloadIcon />}
        onClick={onDownload}
      >
        Stáhni si dárek!
      </CustomButton>
    </Stack>
  )
}
