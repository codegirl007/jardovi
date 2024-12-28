'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {Box, Stack} from '@mui/material'
import CustomButton from '../buttons/CustomButton'
import PrimaryText from '../PrimaryText'
import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {
  hideErrorNotificationSelector,
  NotificationVariant,
  showNotificationSelector,
  useNotificationStore
} from '../notification/store/notificationStore'

interface Props {
  setVisibleTask: Dispatch<SetStateAction<number>>
}

export default function Task1({setVisibleTask}: Props) {
  const {isMobile} = useIsResponsive()
  const [clicked, setClicked] = useState(0)
  const [buttonsData, setButtonsData] = useState([])
  const setNotification = useNotificationStore(showNotificationSelector)
  const hideErrorNotification = useNotificationStore(hideErrorNotificationSelector)

  const rainbowColors = [
    '#FF5733', // Oranžová červená
    '#C70039', // Tmavě červená
    '#900C3F', // Tmavá fialová
    '#581845', // Hluboká fialová
    '#1F618D', // Tmavá modrá
    '#2874A6', // Střední modrá
    '#1ABC9C', // Tyrkysová
    '#16A085', // Tmavší tyrkysová
    '#27AE60', // Zelená
    '#229954', // Tmavší zelená
    '#D35400', // Oranžová
    '#E74C3C', // Červená
    '#8E44AD', // Fialová
    '#6C3483', // Tmavě purpurová
    '#2C3E50', // Tmavě šedomodrá
    '#34495E', // Střední šedomodrá
    '#3498DB', // Světlá modrá
    '#2980B9', // Tmavší modrá
    '#E84393', // Růžová
    '#FF6F61' // Korálově červená
  ]

  useEffect(() => {
    const generatedData = Array.from({length: 80}).map(() => ({
      position: {
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`
      },
      color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)]
    }))
    setButtonsData(generatedData)
  }, [])

  useEffect(() => {
    if (clicked === 1) {
      return setNotification({
        message: 'Tenhle ne! Zkus jiný!',
        variant: NotificationVariant.ERROR
      })
    }
    if (clicked === 2) {
      return setNotification({
        message: 'Trochu lepší! Ale zkus to znovu',
        variant: NotificationVariant.ERROR
      })
    }
    if (clicked === 3) {
      return setNotification({
        message: 'No tak třeba jinu barvu...',
        variant: NotificationVariant.ERROR
      })
    }
    if (clicked === 4) {
      return setNotification({
        message: 'Jardo, ještě nějaký jiný...',
        variant: NotificationVariant.ERROR
      })
    }
    if (clicked === 5) {
      setVisibleTask(1)
      hideErrorNotification()
      return setNotification({
        message: 'Hurááá',
        variant: NotificationVariant.SUCCESS
      })
    }
  }, [clicked])

  return (
    <Box width="100vw" height="100vh" alignItems="center" justifyContent="center" padding={10}>
      <Stack width="100%" alignItems="center" height="100px">
        <PrimaryText
          text={<>Úkol 1 : &quot;Stiskni libovolné tlačítko&quot;</>}
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
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 'calc(100% - 100px)'
        }}
      >
        {buttonsData.map((data, index) => (
          <CustomButton
            key={index}
            variant="contained"
            sx={{
              position: 'absolute',
              ...data.position,
              backgroundColor: data.color,
              color: '#fff',
              '&:hover': {
                filter: 'contrast(200%)'
              }
            }}
            onClick={() => setClicked((prev) => prev + 1)}
          >
            {`Button`}
          </CustomButton>
        ))}
      </Box>
    </Box>
  )
}
