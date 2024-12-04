import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Settings } from 'lucide-react'
import { NotificationItem } from "@/components/dashboard/notification-item"

export const metadata: Metadata = {
  title: "Notifications | Dashboard",
  description: "Manage your FoodSub notifications",
}

const notifications = [
  { id: "1", title: "Your next meal is ready for delivery", date: "1 hour ago", read: false },
  { id: "2", title: "New menu items available", date: "1 day ago", read: true },
  { id: "3", title: "Rate your last meal", date: "2 days ago", read: true },
]

export default function NotificationsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Notifications"
        text="Manage your notification preferences and view recent alerts."
      >
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> Notification Settings
        </Button>
      </DashboardHeader>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Notifications</CardTitle>
          <Button variant="ghost" size="sm">
            Mark All as Read
          </Button>
        </CardHeader>
        <CardContent>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

