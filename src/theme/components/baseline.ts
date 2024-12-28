import {ThemeOptions} from '@mui/material/styles/createTheme'

export const baseline: NonNullable<ThemeOptions['components']> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        position: 'relative',
        // minHeight: '100vh',
        // height: '100dvh',
        // overflow: 'hidden',
        margin: 0
      },
      html: {
        scrollBehavior: 'smooth'
      }
    }
  }
}
