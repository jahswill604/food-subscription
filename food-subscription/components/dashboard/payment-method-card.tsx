import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Trash2 } from 'lucide-react'

interface PaymentMethod {
  id: string
  type: string
  last4: string
  expiry: string
}

interface PaymentMethodCardProps {
  method: PaymentMethod
}

export function PaymentMethodCard({ method }: PaymentMethodCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <CreditCard className="h-8 w-8 text-primary" />
          <div>
            <p className="font-semibold">{method.type} ending in {method.last4}</p>
            <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Edit</Button>
        <Button variant="destructive" size="sm">
          <Trash2 className="h-4 w-4 mr-2" /> Remove
        </Button>
      </CardFooter>
    </Card>
  )
}

