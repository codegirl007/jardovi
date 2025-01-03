'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {Box, Stack} from '@mui/material'
import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import OtpInput from '../input/OtpInput'
import PrimaryText from '../PrimaryText'
import {
  hideErrorNotificationSelector,
  NotificationVariant,
  showNotificationSelector,
  useNotificationStore
} from '../notification/store/notificationStore'

interface Props {
  setVisibleTask: Dispatch<SetStateAction<number>>
}

export default function Task4({setVisibleTask}: Props) {
  const {isMobile} = useIsResponsive()
  const [otp, setOtp] = useState('')
  const onChange = (value: string) => setOtp(value)
  const setNotification = useNotificationStore(showNotificationSelector)
  const hideErrorNotification = useNotificationStore(hideErrorNotificationSelector)

  useEffect(() => {
    const splittedOtp = otp.split('')
    const newOtp = splittedOtp.filter((item) => item !== ' ')

    if (
      (newOtp[0] === '4' && newOtp.length > 0) ||
      (newOtp[1] === '3' && newOtp.length > 1) ||
      (newOtp[2] === '2' && newOtp.length > 2) ||
      (newOtp[3] === '1' && newOtp.length > 3)
    ) {
      hideErrorNotification()
    }
    const isCorrect = newOtp[0] === '4' && newOtp[1] === '3' && newOtp[2] === '2' && newOtp[3] === '1'
    if (newOtp.length === 4 && isCorrect) {
      hideErrorNotification()
      setNotification({
        message: 'Woohoo!',
        variant: NotificationVariant.SUCCESS
      })
      setVisibleTask(4)
    } else {
      if (newOtp[0] !== '4' && newOtp.length > 0) {
        return setNotification({
          message: 'První odpověď špatně!',
          description: 'Kdepak! Je to méně než 5 a víc než 3',
          variant: NotificationVariant.ERROR
        })
      }
      if (newOtp[1] !== '3' && newOtp.length > 1) {
        return setNotification({
          message: 'Druhá odpověď špatně!',
          description: 'Nope! Je to méně než 4 a víc než 2',
          variant: NotificationVariant.ERROR
        })
      }
      if (newOtp[2] !== '2' && newOtp.length > 2) {
        return setNotification({
          message: 'Třetí odpověď špatně!',
          description: 'Jakože...byli tam červení a modří',
          variant: NotificationVariant.ERROR
        })
      }
      if (newOtp[3] !== '1' && newOtp.length > 3) {
        return setNotification({
          message: 'Čtvrtá odpověď špatně!',
          description: 'Co bychom bez Martínka dělali!',
          variant: NotificationVariant.ERROR
        })
      }
    }
  }, [otp])

  return (
    <Box width="100vw" height="100vh" alignItems="center" justifyContent="center" padding={10} position="relative">
      <Stack width="100%" alignItems="center" height="100px">
        <PrimaryText
          text={<>Úkol 4 : &quot;Zadej kód&quot;</>}
          mb={isMobile ? '18px' : '12px'}
          fontSize={isMobile ? '32px' : '44px'}
          sx={{
            '@media (min-height: 500px) and (max-height: 700px) and (min-width: 960px)': {
              marginBottom: '0px',
              fontSize: '28px'
            }
          }}
        />
        <Stack alignItems="start">
          <Box color="white" fontFamily={'Borda'}>
            První číslo je počet dětí co má Janča v domácnosti
          </Box>
          <Box color="white" fontFamily={'Borda'}>
            Druhé číslo je čas, kdy jsi vstával v den výstupu na Sněžku
          </Box>
          <Box color="white" fontFamily={'Borda'}>
            Třetí číslo je počet týmů na posledním teambuildingu
          </Box>
          <Box color="white" fontFamily={'Borda'}>
            Čtvrté číslo je počet designérů v Edgy ve věku pod 20
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <OtpInput value={otp} valueLength={4} onChange={onChange} />
      </Box>
    </Box>
  )
}
