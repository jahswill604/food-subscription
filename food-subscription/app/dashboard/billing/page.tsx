import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, DollarSign, Download } from 'lucide-react'
import { PaymentMethodCard } from "@/components/dashboard/payment-method-card"

export const metadata: Metadata = {
  title: "Billing | Dashboard",
  description: "Manage your FoodSub billing and payment methods",
}

const paymentMethods = [
  { id: "1", type: "Visa", last4: "4242", expiry: "12/2024" },
  { id: "2", type: "Mastercard", last4: "5555", expiry: "10/2023" },
]

export default function BillingPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage your billing information and payment methods."
      >
        <Button>
          <CreditCard className="mr-2 h-4 w-4" /> Add Payment Method
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$250.00</div>
            <p className="text-xs text-muted-foreground">Next billing date: Dec 15, 2023</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download Invoice
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paymentMethods.map((method) => (
            <PaymentMethodCard key={method.id} method={method} />
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

