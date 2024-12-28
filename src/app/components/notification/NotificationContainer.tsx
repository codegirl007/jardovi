'use client'
import {styled} from '@mui/material/styles'
import {notificationsSelector, useNotificationStore} from './store/notificationStore'
import Notification from './Notification'

const Styled = {
  NotificationsContainer: styled('div')(({theme}) => ({
    zIndex: 99999,
    position: 'fixed',
    top: 0,
    right: 0,
    paddingBottom: theme.spacing(16),
    background: 'linear-gradient(216deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.00) 51.68%)',
    [theme.breakpoints.down('md')]: {
      bottom: 0,
      top: 'auto',
      width: '100%',
      paddingBottom: 0,
      background: 'linear-gradient(357deg, rgba(0, 0, 0, 0.10) 2.75%, rgba(0, 0, 0, 0.00) 92.77%)'
    }
  })),
  NotificationInnerContainer: styled('div')(({theme}) => ({
    paddingTop: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(16)
    }
  }))
}

export default function NotificationContainer() {
  const notifications = useNotificationStore(notificationsSelector)

  if (notifications.length === 0) {
    return null
  }

  return (
    <Styled.NotificationsContainer id="notification">
      <Styled.NotificationInnerContainer>
        {notifications.map((notification) => (
          <Notification notification={notification} key={notification.id} />
        ))}
      </Styled.NotificationInnerContainer>
    </Styled.NotificationsContainer>
  )
}
