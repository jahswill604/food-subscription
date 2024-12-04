import { Button } from "@/components/ui/button"
import { Bell } from 'lucide-react'

interface Notification {
  id: string
  title: string
  date: string
  read: boolean
}

interface NotificationItemProps {
  notification: Notification
}

export function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <div className={`flex items-center justify-between py-4 ${notification.read ? 'opacity-60' : ''}`}>
      <div className="flex items-center space-x-4">
        <Bell className={`h-6 w-6 ${notification.read ? 'text-muted-foreground' : 'text-primary'}`} />
        <div>
          <p className="font-medium">{notification.title}</p>
          <p className="text-sm text-muted-foreground">{notification.date}</p>
        </div>
      </div>
      {!notification.read && (
        <Button variant="ghost" size="sm">
          Mark as Read
        </Button>
      )}
    </div>
  )
}

