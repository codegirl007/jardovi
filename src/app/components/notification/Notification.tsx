'use client'

import {styled} from '@mui/material'
import SnackbarContent from '@mui/material/SnackbarContent'
import Typography from '@mui/material/Typography'
import {ErrorIcon} from '@/assets/notificationIcons/ErrorIcon'
import {SuccessIcon} from '@/assets/notificationIcons/SuccessIcon'
import {NotificationInfo, NotificationVariant} from './store/notificationStore'

const Styled = {
  SnackBarIconContainer: styled('div')(({theme}) => ({
    height: '100%',
    display: 'flex',
    paddingRight: theme.spacing(5),
    marginTop: 'auto',
    marginBottom: 'auto'
  })),
  Message: styled(Typography)({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: 'black',
    fontFamily: 'Borda',
    fontSize: '18px'
  }),
  Description: styled(Typography)({
    textOverflow: 'ellipsis',
    color: 'black',
    fontFamily: 'Borda',
    fontSize: '15px'
  }),
  MessageContainer: styled('div')({
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'start'
  })
}

type Props = {
  notification: NotificationInfo
}

export default function Notification({notification}: Props) {
  return (
    <SnackbarContent
      key={notification.id}
      message={
        <>
          <Styled.SnackBarIconContainer>
            {notification.variant === NotificationVariant.SUCCESS ? <SuccessIcon /> : <ErrorIcon />}
          </Styled.SnackBarIconContainer>
          <Styled.MessageContainer>
            <Styled.Message>{notification.message}</Styled.Message>
            {notification.description && <Styled.Description>{notification.description}</Styled.Description>}
          </Styled.MessageContainer>
        </>
      }
      sx={{marginBottom: {md: 6, xs: 6}}}
    />
  )
}
