'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {Box, Stack} from '@mui/material'
import PrimaryText from './PrimaryText'

export default function Warning() {
  const {isMobile} = useIsResponsive()

  return (
    <Box width="100vw" height="100vh" alignItems="center" justifyContent="center" padding={10}>
      <Stack width="100%" alignItems="center" justifyContent="center">
        <PrimaryText
          text={<>Teď už tě appka nikam v mobilu nepustí... hezky k počítači!</>}
          mb={isMobile ? '18px' : '12px'}
          fontSize={isMobile ? '32px' : '44px'}
          sx={{
            '@media (min-height: 500px) and (max-height: 700px) and (min-width: 960px)': {
              marginBottom: '0px',
              fontSize: '28px'
            }
          }}
        />
      </Stack>
    </Box>
  )
}
