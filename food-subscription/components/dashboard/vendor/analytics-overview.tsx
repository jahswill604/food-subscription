import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingBag, TrendingUp, Users } from 'lucide-react'

const analyticsData = [
  {
    title: "Total Revenue",
    icon: DollarSign,
    value: "$12,345",
    change: "+8% from last month",
  },
  {
    title: "Total Orders",
    icon: ShoppingBag,
    value: "1,234",
    change: "+15% from last month",
  },
  {
    title: "Customer Growth",
    icon: Users,
    value: "256",
    change: "+12% from last month",
  },
  {
    title: "Average Order Value",
    icon: TrendingUp,
    value: "$45.67",
    change: "+5% from last month",
  },
]

export function AnalyticsOverview() {
  return (
    <>
      {analyticsData.map((item) => (
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

