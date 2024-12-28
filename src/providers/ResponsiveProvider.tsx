'use client'
import {useTheme} from '@mui/material'
import React, {createContext, PropsWithChildren, useContext, useEffect, useLayoutEffect, useMemo, useState} from 'react'

type ContextState = {
  isMobile: boolean
}

interface Props extends PropsWithChildren {
  isMobile: boolean
}

const initialState: ContextState = {
  isMobile: false
}

const ResponsiveContext = createContext<ContextState>(initialState)

export default function ResponsiveProvider({children, isMobile: isMobileProp}: Props) {
  const theme = useTheme()
  const [queryMatches, setQueryMatches] = useState(false)
  const [mediaListener, setMediaListenere] = useState<MediaQueryList | undefined>()

  useLayoutEffect(() => {
    const x = window.matchMedia(`(max-width:${theme.breakpoints.values.lg}px)`)
    setMediaListenere(x)
    setQueryMatches(x.matches)
  }, [theme])

  useEffect(() => {
    if (mediaListener) {
      mediaListener.addEventListener('change', () => {
        setQueryMatches(mediaListener.matches)
      })
    }

    return () => {
      if (mediaListener) {
        mediaListener.removeEventListener('change', () => {
          setQueryMatches(mediaListener.matches)
        })
      }
    }
  }, [mediaListener])

  const values = useMemo(() => {
    return {isMobile: isMobileProp || queryMatches}
  }, [isMobileProp, queryMatches])

  return <ResponsiveContext.Provider value={values}>{children}</ResponsiveContext.Provider>
}

export const useIsResponsive = () => {
  const context = useContext(ResponsiveContext)

  if (context === undefined) {
    throw new Error('useIsConnected was used outside of its Provider')
  }

  return context
}
