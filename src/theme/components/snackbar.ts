import {ThemeOptions} from '@mui/material/styles/createTheme'

export const snackbar: ThemeOptions['components'] = {
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({theme}) =>
        theme.unstable_sx({
          boxShadow: theme.shadows[3],
          backgroundColor: 'white',
          width: '350px',
          display: 'flex',
          padding: theme.spacing(6),
          justifyContent: 'space-between',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
          alignItems: 'start',
          [theme.breakpoints.down('md')]: {
            width: '100%'
          }
        }),
      message: {
        padding: 0,
        display: 'flex',
        height: '100%'
      },
      action: {
        padding: 0,
        margin: 0,
        position: 'absolute',
        top: 0,
        right: 0,
        button: {
          padding: 0
        }
      }
    }
  }
}
