import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { CustomerOverview } from "@/components/dashboard/vendor/customer-overview"
import { CustomerSegmentation } from "@/components/dashboard/vendor/customer-segmentation"
import { TopCustomers } from "@/components/dashboard/vendor/top-customers"

export const metadata: Metadata = {
  title: "Customer Insights | Vendor Dashboard",
  description: "Analyze customer behavior and preferences",
}

export default function CustomerInsightsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Customer Insights"
        text="Analyze customer behavior and preferences to improve your service."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CustomerOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <CustomerSegmentation />
        <TopCustomers />
      </div>
    </DashboardShell>
  )
}

