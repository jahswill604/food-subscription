import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package } from 'lucide-react'

interface Subscription {
  id: string
  name: string
  plan: string
  nextDelivery: string
  image: string
}

interface SubscriptionCardProps {
  subscription: Subscription
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{subscription.name}</CardTitle>
        <Package className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Image
            src={subscription.image}
            alt={subscription.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold">{subscription.plan}</div>
            <p className="text-sm text-muted-foreground">Next delivery: {subscription.nextDelivery}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">Manage Subscription</Button>
      </CardFooter>
    </Card>
  )
}

