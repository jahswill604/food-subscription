import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SubscriptionOverview } from "@/components/dashboard/subscription-overview"
import { UpcomingDeliveries } from "@/components/dashboard/upcoming-deliveries"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { NutritionOverview } from "@/components/dashboard/nutrition-overview"

export const metadata: Metadata = {
  title: "Dashboard | FoodSub",
  description: "Manage your FoodSub subscriptions and deliveries",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Welcome back, Alex!"
        text="Here's what's happening with your FoodSub account."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SubscriptionOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <UpcomingDeliveries className="col-span-4" />
        <QuickActions className="col-span-3" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentOrders className="col-span-4" />
        <NutritionOverview className="col-span-3" />
      </div>
    </DashboardShell>
  )
}

