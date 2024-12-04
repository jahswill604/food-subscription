import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { InventoryTable } from "@/components/dashboard/vendor/inventory-table"

export const metadata: Metadata = {
  title: "Inventory | Vendor Dashboard",
  description: "Manage your restaurant's inventory on FoodSub",
}

export default function InventoryPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Inventory"
        text="Track and manage your inventory levels."
      >
      </DashboardHeader>
      <InventoryTable />
    </DashboardShell>
  )
}

