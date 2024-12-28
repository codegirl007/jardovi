'use client'

import {Box, Switch, SxProps} from '@mui/material'
import {Controller, useFormContext} from 'react-hook-form'

interface Props {
  name: string
  sx?: SxProps
}

export default function CustomSwitch({name, sx}: Props) {
  const {control} = useFormContext()
  return (
    <Box sx={sx}>
      <Controller
        control={control}
        name={name}
        render={({field}) => (
          <Switch
            size="small"
            {...field}
            checked={field.value || false}
            inputProps={{'aria-label': 'controlled'}}
            sx={{
              height: '32px',
              width: '56px',
              padding: 0,
              '& .MuiSwitch-track': {
                borderRadius: '9999px',
                border: '1px solid white',
                background:
                  'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(178, 178, 178, 0.20) 0%, rgba(151, 151, 151, 0.04) 77.08%, rgba(191, 191, 191, 0.00) 100%)',
                opacity: '1 !important',
                ...(field.value && {
                  background:
                    'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(220, 189, 151, 0.40) 0%, rgba(151, 151, 151, 0.09) 77.08%, rgba(191, 191, 191, 0.00) 100%) !important',
                  opacity: '1 !important'
                })
              },
              '& .MuiSwitch-switchBase': {
                transform: 'translateX(0px)',
                '&.Mui-checked': {
                  transform: 'translateX(24px)'
                }
              },
              '& .MuiSwitch-thumb': {
                width: 24,
                height: 24,
                border: '1px solid white',
                background:
                  'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(178, 178, 178, 0.20) 0%, rgba(151, 151, 151, 0.04) 77.08%, rgba(191, 191, 191, 0.00) 100%)',

                ...(field.value && {
                  background: 'red'
                })
              }
            }}
          />
        )}
      />
    </Box>
  )
}
