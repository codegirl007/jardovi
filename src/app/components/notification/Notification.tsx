'use client'

import React from 'react'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SnackbarContent from '@mui/material/SnackbarContent'
import {styled} from '@mui/material'

import {
  hideNotificationSelector,
  NotificationInfo,
  NotificationVariant,
  useNotificationStore
} from './store/notificationStore'
import {SuccessIcon} from '@/assets/notificationIcons/SuccessIcon'
import {ErrorIcon} from '@/assets/notificationIcons/ErrorIcon'

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
    fontSize: '18px'
  }),
  MessageContainer: styled('div')({
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center'
  })
}

type Props = {
  notification: NotificationInfo
}

export default function Notification({notification}: Props) {
  const hideNotification = useNotificationStore(hideNotificationSelector)
  const onClose = () => {
    hideNotification(notification)
  }

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
      action={[<IconButton key="close" aria-label="Close" size="large" onClick={onClose}></IconButton>]}
      sx={{marginBottom: {md: 6, xs: 6}}}
    />
  )
}
