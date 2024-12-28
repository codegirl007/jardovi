import {create} from 'zustand'

export type NotificationInfo = {
  id?: number
  message: string
  description?: string
  variant?: NotificationVariant
}

export enum NotificationVariant {
  ERROR = 'error',
  SUCCESS = 'success'
}

type State = {
  notifications: NotificationInfo[]
  lastId: number
}

type Actions = {
  reset: () => void
  showNotification: (notificationInfo: NotificationInfo) => void
  hideNotification: (id: number) => void
  hideErrorNotification: () => void
}

const initialState: State = {
  notifications: [],
  lastId: 0
}

export const useNotificationStore = create<State & Actions>((set) => ({
  ...initialState,
  reset: () => {
    set(initialState)
  },
  showNotification: (notificationInfo: NotificationInfo) => {
    const lastId = useNotificationStore.getState().lastId
    const newNotification = {...notificationInfo, id: lastId + 1}
    set((state) => ({
      notifications: [...state.notifications, {...newNotification}],
      lastId: state.lastId + 1
    }))
  },
  hideNotification: (id: number) => {
    set((state) => ({notifications: state.notifications.filter((item) => item.id !== id)}))
  },
  hideErrorNotification: () => {
    set((state) => ({notifications: state.notifications.filter((item) => item.variant !== NotificationVariant.ERROR)}))
  }
}))

export const notificationsSelector = (state: State) => state.notifications
export const resetSelector = (actions: Actions) => actions.reset
export const showNotificationSelector = (actions: Actions) => actions.showNotification
export const hideNotificationSelector = (actions: Actions) => actions.hideNotification
export const hideErrorNotificationSelector = (actions: Actions) => actions.hideErrorNotification
