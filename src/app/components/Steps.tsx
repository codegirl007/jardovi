'use client'

import {useIsResponsive} from '@/providers/ResponsiveProvider'
import {Stack} from '@mui/material'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Task1 from './task/Task1'
import Task2 from './task/Task2'
import Task3 from './task/Task3'
import Task4 from './task/Task4'
import Task5 from './task/Task5'
import Warning from './Warning'

export default function Steps() {
  const [visibleStep, setVisibleStep] = useState(0)
  const [visibleTask, setVisibleTask] = useState(0)
  const [showBox, setShowBox] = useState(false)
  const {isMobile} = useIsResponsive()

  const steps = [<Step1 key={0} />, <Step2 key={1} />, <Step3 key={2} />]
  const tasks = [
    <Task1 key={0} setVisibleTask={setVisibleTask} />,
    <Task2 key={1} setVisibleTask={setVisibleTask} />,
    <Task3 key={2} setVisibleTask={setVisibleTask} />,
    <Task4 key={3} setVisibleTask={setVisibleTask} />,
    <Task5 key={4} />
  ]

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
        setShowBox(true)
        clearInterval(interval)
        return prevStep
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [visibleStep])

  return (
    <Stack
      width="100%"
      height={'100%'}
      alignItems="center"
      justifyContent="center"
      paddingRight={isMobile ? '20px' : '86px'}
      paddingLeft={isMobile ? '20px' : '86px'}
      sx={{background: 'black'}}
    >
      <motion.div
        initial={{scale: 1, opacity: 1}}
        animate={{
          scale: showBox ? 0 : 1,
          opacity: showBox ? 0 : 1,
          transition: {duration: 1}
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0}}
            animate={{
              opacity: visibleStep === index ? 1 : 0,
              transition: {duration: 1, delay: visibleStep === index ? 1 : 0}
            }}
            exit={{opacity: showBox ? 0 : 1}}
            style={{position: 'absolute'}}
          >
            {step}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{scale: 0, opacity: 0}}
        animate={{
          scale: showBox ? 1 : 0,
          opacity: showBox ? 1 : 0,
          transition: {duration: 1}
        }}
        style={{
          position: 'absolute',
          zIndex: 9999,
          color: 'white',
          textAlign: 'center',
          marginLeft: isMobile ? '20px' : 0,
          marginRight: isMobile ? '20px' : 0
        }}
      >
        {isMobile ? <Warning /> : tasks[visibleTask]}
      </motion.div>
    </Stack>
  )
}
