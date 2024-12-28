'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {themeColors} from '@/theme/theme'
import {zodResolver} from '@hookform/resolvers/zod'
import {Box, Grid2, Stack} from '@mui/material'
import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {z} from 'zod'
import CustomButton from '../buttons/CustomButton'
import PrimaryText from '../PrimaryText'
import CustomSwitch from '../switches/CustomSwitch'

interface Props {
  setVisibleTask: Dispatch<SetStateAction<number>>
}

type SwitchKeys = `switch${number}`
type FormValues = Record<SwitchKeys, boolean>
const switchCount = 16

export default function Task2({setVisibleTask}: Props) {
  const {isMobile} = useIsResponsive()
  const [buttonsData, setButtonsData] = useState([])

  const initialSwitches: Record<SwitchKeys, boolean> = {} as Record<SwitchKeys, boolean>
  Array.from({length: switchCount}).forEach((num, index) => {
    initialSwitches[`switch${index}` as SwitchKeys] = false
  })

  const schema = z.object(
    Array.from({length: switchCount}).reduce<Record<SwitchKeys, z.ZodLiteral<true>>>(
      (acc, _, index) => {
        acc[`switch${index}` as SwitchKeys] = z.literal(true) // Pole musí být true
        return acc
      },
      {} as Record<SwitchKeys, z.ZodLiteral<true>>
    )
  )

  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: initialSwitches,
    resolver: zodResolver(schema)
  })

  const {formState} = methods

  useEffect(() => {
    const generatedData = Array.from({length: switchCount}).map(() => ({
      position: {
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`
      }
    }))
    setButtonsData(generatedData)
  }, [])

  return (
    <FormProvider {...methods}>
      <form>
        <Box width="100vw" height="100vh" alignItems="center" justifyContent="center" padding={10}>
          <Stack width="100%" alignItems="center" height="100px">
            <PrimaryText
              text={<>Úkol 2 : &quot;Všechny switche dej na true&quot;</>}
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
              height: 'calc(100% - 100px)',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex'
            }}
          >
            <Grid2 container spacing={8}>
              {buttonsData.map((data, index) => (
                <Grid2 key={index} size={3}>
                  <CustomSwitch name={`switch${index}`} />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Box>
      </form>
      {formState.isValid && (
        <CustomButton
          onClick={() => setVisibleTask(2)}
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 99999,
            bgcolor: themeColors.redContrast,
            color: 'white'
          }}
        >
          Jde ti to skvěle! Klikni sem!
        </CustomButton>
      )}
    </FormProvider>
  )
}
