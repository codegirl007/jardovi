'use client'
import {createTheme, ThemeOptions} from '@mui/material/styles'
import {breakpoints} from './breakpoints'
import merge from 'lodash.merge'
import {snackbar} from './components/snackbar'

const components: NonNullable<ThemeOptions['components']> = merge(
  {},

  snackbar
)

export const gradients = {
  card: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(178, 178, 178, 0.20) 0%, rgba(151, 151, 151, 0.04) 77.08%, rgba(191, 191, 191, 0.00) 100%)',
  hoveredCard:
    'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(220, 189, 151, 0.50) 0%, rgba(151, 151, 151, 0.11) 77.08%, rgba(191, 191, 191, 0.00) 100%)'
}

export const themeColors = {
  redContrast: ' #FF2100'
}

export const theme = createTheme({
  // spacing: [0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,  18,  19]
  components,
  spacing: [0, 2, 4, 6, 8, 12, 18, 20, 24, 32, 40, 48, 50, 60, 64, 80, 90, 96, 128, 160],
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: '#FF2100'
    }
  }
})
