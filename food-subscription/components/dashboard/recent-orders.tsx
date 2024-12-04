import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from 'lucide-react'

interface RecentOrdersProps extends React.HTMLAttributes<HTMLDivElement> {}

const orders = [
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

export function RecentOrders({ className, ...props }: RecentOrdersProps) {
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
                  Order #{order.id}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.vendor} - {order.meal}
                </p>
                <p className="text-xs text-muted-foreground">
                  {order.date}
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{order.status}</Badge>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < order.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

