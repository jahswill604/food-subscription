import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SubscriptionList } from "@/components/dashboard/vendor/subscription-list"


export const metadata: Metadata = {
  title: "Subscriptions | Vendor Dashboard",
  description: "Manage your subscription plans on FoodSub",
}

export default function SubscriptionsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Subscription Plans"
        text="Create and manage subscription plans for your customers."
      >
      </DashboardHeader>
      <SubscriptionList />
    </DashboardShell>
  )
}

