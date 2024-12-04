import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShoppingCart, TrendingUp, UserPlus } from 'lucide-react'

const customerData = [
  {
    title: "Total Customers",
    icon: Users,
    value: "1,234",
    change: "+15% from last month",
  },
  {
    title: "Average Order Value",
    icon: ShoppingCart,
    value: "$45.67",
    change: "+5% from last month",
  },
  {
    title: "Customer Retention Rate",
    icon: TrendingUp,
    value: "85%",
    change: "+2% from last month",
  },
  {
    title: "New Customers",
    icon: UserPlus,
    value: "78",
    change: "+10% from last month",
  },
]

export function CustomerOverview() {
  return (
    <>
      {customerData.map((item) => (
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

