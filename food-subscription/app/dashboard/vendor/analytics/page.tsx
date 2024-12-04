import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { AnalyticsOverview } from "@/components/dashboard/vendor/analytics-overview"
import { SalesChart } from "@/components/dashboard/vendor/sales-chart"
import { TopSellingItems } from "@/components/dashboard/vendor/top-selling-items"

export const metadata: Metadata = {
  title: "Analytics | Vendor Dashboard",
  description: "View detailed analytics for your restaurant on FoodSub",
}

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Analytics"
        text="View detailed sales reports and analytics."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AnalyticsOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <SalesChart />
        <TopSellingItems />
      </div>
    </DashboardShell>
  )
}

