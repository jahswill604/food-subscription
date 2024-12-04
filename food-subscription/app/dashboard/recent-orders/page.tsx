import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: "Recent Orders | Dashboard",
  description: "View your recent food orders and their status",
}

const recentOrders = [
  {
    id: "1234",
    vendor: "Sushi Master",
    meal: "Japanese Delights",
    date: "November 28, 2023",
    status: "Delivered",
    rating: 5,
  },
  {
    id: "1233",
    vendor: "Taco Fiesta",
    meal: "Mexican Feast",
    date: "November 21, 2023",
    status: "Delivered",
    rating: 4,
  },
  {
    id: "1232",
    vendor: "Pasta Paradise",
    meal: "Italian Dinner",
    date: "November 14, 2023",
    status: "Delivered",
    rating: 5,
  },
]

export default function RecentOrdersPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Recent Orders"
        text="View your recent food orders and their status."
      />
      <div className="grid gap-4">
        {recentOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle>{order.vendor} - {order.meal}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <Badge variant="outline">{order.status}</Badge>
              </div>
              <div className="mt-4 flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < order.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardShell>
  )
}

