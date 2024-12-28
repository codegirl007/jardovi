'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {Stack} from '@mui/material'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import Step1 from '../steps_second/Step1'
import Step2 from '../steps_second/Step2'
import Step3 from '../steps_second/Step3'
import Step4 from '../steps_second/Step4'

export default function Task5() {
  const [visibleStep, setVisibleStep] = useState(0)
  const {isMobile} = useIsResponsive()

  const steps = [<Step1 key={0} />, <Step2 key={1} />, <Step3 key={2} />, <Step4 key={2} />]

  useEffect(() => {
    if (visibleStep === steps.length) {
      return
    }
    const interval = setInterval(() => {
      setVisibleStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          const nextStep = (prevStep + 1) % steps.length
          return nextStep
        }

        clearInterval(interval)
        return prevStep
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [visibleStep])

  return (
    <Stack
      width="100vw"
      height={'100%'}
      alignItems="center"
      justifyContent="center"
      paddingRight={isMobile ? '20px' : '86px'}
      paddingLeft={isMobile ? '20px' : '86px'}
      sx={{background: 'black'}}
    >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{opacity: 0}}
          animate={{
            opacity: visibleStep === index ? 1 : 0,
            transition: {duration: 1, delay: visibleStep === index ? 1 : 0}
          }}
          style={{position: 'absolute'}}
        >
          {step}
        </motion.div>
      ))}
    </Stack>
  )
}
