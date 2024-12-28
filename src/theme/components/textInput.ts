import {ThemeOptions} from '@mui/material/styles/createTheme'

export const textInput: ThemeOptions['components'] = {
  MuiInputBase: {
    defaultProps: {autoComplete: 'off'},

    styleOverrides: {
      root: ({theme}) =>
        theme.unstable_sx({
          width: '100%'
        }),
      input: ({theme}) =>
        theme.unstable_sx({
          fontWeight: 400,
          color: 'white'
        })
    }
  },

  MuiOutlinedInput: {
    defaultProps: {notched: false},
    styleOverrides: {
      multiline: {
        height: '134px',
        display: 'flex',
        alignItems: 'start'
      },
      root: ({theme}) =>
        theme.unstable_sx({
          borderRadius: '8px',
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              border: '0.907px solid rgba(226, 226, 226, 0.5)'
            }
          },
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              border: '0.907px solid rgba(226, 226, 226, 0.5)'
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              border: '0.907px solid rgba(226, 226, 226, 0.5)'
            }
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            border: '0.907px solid rgba(226, 226, 226, 0.5)'
          }
        }),
      notchedOutline: ({theme}) =>
        theme.unstable_sx({
          border: '0.907px solid rgba(226, 226, 226, 0.5)'
        })
    }
  }
}
