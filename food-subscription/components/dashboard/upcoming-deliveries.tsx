import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from 'lucide-react'
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

interface UpcomingDeliveriesProps extends React.HTMLAttributes<HTMLDivElement> {}

const deliveries = [
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

export function UpcomingDeliveries({ className, ...props }: UpcomingDeliveriesProps) {
  const [isRescheduling, setIsRescheduling] = useState(false)
  const [selectedDelivery, setSelectedDelivery] = useState<typeof deliveries[0] | null>(null)
  const [newDate, setNewDate] = useState<Date | undefined>(undefined)

  const handleReschedule = (delivery: typeof deliveries[0]) => {
    setSelectedDelivery(delivery)
    setIsRescheduling(true)
  }

  const confirmReschedule = () => {
    if (selectedDelivery && newDate) {
      // In a real app, you'd update this in your backend
      console.log(`Rescheduled delivery ${selectedDelivery.id} to ${newDate.toDateString()}`)
      setIsRescheduling(false)
      setNewDate(undefined)
    }
  }

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Upcoming Deliveries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {delivery.vendor} - {delivery.meal}
                </p>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {delivery.date}
                </p>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {delivery.time}
                </p>
              </div>
              <Button variant="outline" size="sm" className="ml-auto" onClick={() => handleReschedule(delivery)}>
                Reschedule
              </Button>
            </div>
          ))}
        </div>
        <Dialog open={isRescheduling} onOpenChange={setIsRescheduling}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reschedule Delivery</DialogTitle>
            </DialogHeader>
            <CalendarComponent
              mode="single"
              selected={newDate}
              onSelect={setNewDate}
              className="rounded-md border"
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsRescheduling(false)}>Cancel</Button>
              <Button onClick={confirmReschedule}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

