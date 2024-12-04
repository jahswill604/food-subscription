import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Upcoming Deliveries | Dashboard",
  description: "View and manage your upcoming food deliveries",
}

const upcomingDeliveries = [
  {
    id: 1,
    vendor: "Gourmet Delights",
    meal: "French Cuisine Box",
    date: "Monday, December 4, 2023",
    time: "18:00 - 20:00",
  },
  {
    id: 2,
    vendor: "Spice Paradise",
    meal: "Indian Feast",
    date: "Thursday, December 7, 2023",
    time: "19:00 - 21:00",
  },
  {
    id: 3,
    vendor: "Sushi Master",
    meal: "Japanese Delights",
    date: "Monday, December 11, 2023",
    time: "18:30 - 20:30",
  },
]

export default function UpcomingDeliveriesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Upcoming Deliveries"
        text="View and manage your upcoming food deliveries."
      />
      <div className="grid gap-4">
        {upcomingDeliveries.map((delivery) => (
          <Card key={delivery.id}>
            <CardHeader>
              <CardTitle>{delivery.vendor} - {delivery.meal}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">{delivery.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">{delivery.time}</span>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm">Reschedule</Button>
                <Button variant="outline" size="sm">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  )
}

