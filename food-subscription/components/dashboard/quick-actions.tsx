import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Calendar, CreditCard, MessageCircle } from 'lucide-react'

interface QuickActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const actions = [
  {
    title: "Add New Subscription",
    icon: PlusCircle,
    href: "/dashboard/subscriptions/new",
  },
  {
    title: "Manage Deliveries",
    icon: Calendar,
    href: "/dashboard/deliveries",
  },
  {
    title: "Update Payment Method",
    icon: CreditCard,
    href: "/dashboard/billing",
  },
  {
    title: "Contact Support",
    icon: MessageCircle,
    href: "/dashboard/support",
  },
]

export function QuickActions({ className, ...props }: QuickActionsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {actions.map((action) => (
          <Button key={action.title} variant="outline" className="w-full justify-start" asChild>
            <a href={action.href}>
              <action.icon className="mr-2 h-4 w-4" />
              {action.title}
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}

