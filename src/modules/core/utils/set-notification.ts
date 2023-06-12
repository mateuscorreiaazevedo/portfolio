import { toast } from 'react-hot-toast'

type Notification = 'success' | 'error'

export function setNotification (message: string, type: Notification = 'error') {
  if (type === 'success') {
    return toast.success(message)
  }

  return toast.error(message)
}
