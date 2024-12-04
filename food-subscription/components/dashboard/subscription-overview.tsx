import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, DollarSign, Utensils, Calendar } from 'lucide-react'

const subscriptionData = [
  {
    title: "Active Subscriptions",
    value: "3",
    icon: Package,
    change: "+1 from last month",
  },
  {
    title: "Total Spent",
    value: "$249.99",
    icon: DollarSign,
    change: "+$50.00 from last month",
  },
  {
    title: "Meals Delivered",
    value: "24",
    icon: Utensils,
    change: "+6 from last month",
  },
  {
    title: "Next Delivery",
    value: "2 days",
    icon: Calendar,
    change: "Monday, Dec 4",
  },
]

export function SubscriptionOverview() {
  return (
    <>
      {subscriptionData.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">
              {item.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

