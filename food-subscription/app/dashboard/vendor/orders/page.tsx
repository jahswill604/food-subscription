import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { OrdersTable } from "@/components/dashboard/vendor/orders-table"

export const metadata: Metadata = {
  title: "Orders | Vendor Dashboard",
  description: "Manage your restaurant's orders on FoodSub",
}

export default function OrdersPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Orders"
        text="View and manage customer orders."
      />
      <OrdersTable />
    </DashboardShell>
  )
}

