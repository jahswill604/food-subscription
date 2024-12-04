"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingBag, Star, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const initialOverviewItems = [
  {
    title: "Total Revenue",
    icon: DollarSign,
    value: "$12,345",
    change: "+8% from last month",
    link: "/dashboard/vendor/analytics",
  },
  {
    title: "Active Orders",
    icon: ShoppingBag,
    value: "25",
    change: "+2 from yesterday",
    link: "/dashboard/vendor/orders",
  },
  {
    title: "Customer Rating",
    icon: Star,
    value: "4.8",
    change: "+0.2 from last week",
    link: "/dashboard/vendor/reviews",
  },
  {
    title: "Total Customers",
    icon: Users,
    value: "1,234",
    change: "+15 new this week",
    link: "/dashboard/vendor/customers",
  },
]

export function VendorOverview() {
  const [overviewItems, setOverviewItems] = useState(initialOverviewItems)
  const router = useRouter()

  const handleItemClick = (link: string) => {
    router.push(link)
  }

  return (
    <>
      {overviewItems.map((item) => (
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
            <Button
              variant="link"
              className="mt-2 p-0"
              onClick={() => handleItemClick(item.link)}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

