'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {themeColors} from '@/theme/theme'
import {zodResolver} from '@hookform/resolvers/zod'
import {Box, Grid2, Radio, Stack} from '@mui/material'
import {Dispatch, SetStateAction} from 'react'
import {Controller, FormProvider, useForm} from 'react-hook-form'
import {z} from 'zod'
import CustomButton from '../buttons/CustomButton'
import PrimaryText from '../PrimaryText'

interface Props {
  setVisibleTask: Dispatch<SetStateAction<number>>
}

type RadioKeys = `radio${number}`
type FormValues = Record<RadioKeys, boolean>
const radioCount = 24

export default function Task2({setVisibleTask}: Props) {
  const {isMobile} = useIsResponsive()

  // Schéma validace - všechny hodnoty musí být "true"
  const schema = z.object(
    Array.from({length: radioCount}).reduce<Record<RadioKeys, z.ZodLiteral<true>>>(
      (acc, _, index) => {
        acc[`radio${index}` as RadioKeys] = z.literal(true) // Každé radio musí být "true"
        return acc
      },
      {} as Record<RadioKeys, z.ZodLiteral<true>>
    )
  )

  // Formulář s výchozími hodnotami
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: Array.from({length: radioCount}).reduce<FormValues>((acc, _, index) => {
      acc[`radio${index}` as RadioKeys] = false // Výchozí stav je false (prázdné kolečko)
      return acc
    }, {} as FormValues)
  })

  const {formState, control} = methods

  return (
    <FormProvider {...methods}>
      <form>
        <Box width="100vw" height="100vh" alignItems="center" justifyContent="center" padding={10}>
          <Stack width="100%" alignItems="center" height="100px">
            <PrimaryText
              text={<>Úkol 3 : &quot;Všechny radio buttony zaškrtni&quot;</>}
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
              {Array.from({length: radioCount}).map((data, index) => (
                <Grid2 key={index} size={3}>
                  <Controller
                    key={index}
                    name={`radio${index}` as RadioKeys}
                    control={control}
                    render={({field}) => (
                      <Radio
                        checked={field.value}
                        onChange={() => field.onChange(true)}
                        sx={{
                          color: field.value ? 'red' : 'white',
                          '& .MuiSvgIcon-root': {
                            fontSize: 30,
                            border: '1px solid black',
                            borderRadius: '50%'
                          },
                          '&.Mui-checked': {
                            color: 'red'
                          }
                        }}
                      />
                    )}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Box>
      </form>
      {formState.isValid && (
        <CustomButton
          onClick={() => setVisibleTask(3)}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 99999,
            bgcolor: themeColors.redContrast,
            color: 'white',
            lineHeight: '24px'
          }}
        >
          Jsi talent! Blížíš se ke konci!
          <br /> Baví tě to ještě?🤪
        </CustomButton>
      )}
    </FormProvider>
  )
}
