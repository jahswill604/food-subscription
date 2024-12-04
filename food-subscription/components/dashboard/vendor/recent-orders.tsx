"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface RecentOrdersProps extends React.HTMLAttributes<HTMLDivElement> {}

const initialOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    items: "2x Sushi Platter, 1x Miso Soup",
    status: "Preparing",
    total: "$42.99",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    items: "1x Vegetarian Ramen, 2x Green Tea",
    status: "Ready for Pickup",
    total: "$28.50",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    items: "3x California Roll, 1x Edamame",
    status: "Delivered",
    total: "$35.75",
  },
]

export function RecentOrders({ className, ...props }: RecentOrdersProps) {
  const [orders, setOrders] = useState(initialOrders)
  const router = useRouter()

  const handleViewAllOrders = () => {
    router.push("/dashboard/vendor/orders")
  }

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {order.customer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.items}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-medium">{order.total}</p>
                <Badge
                  variant={order.status === "Delivered" ? "secondary" : "default"}
                >
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <Button onClick={handleViewAllOrders} className="w-full mt-4" variant="outline">
          View All Orders
        </Button>
      </CardContent>
    </Card>
  )
}

