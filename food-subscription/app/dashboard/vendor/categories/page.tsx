import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { CategoryList } from "@/components/dashboard/vendor/category-list"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export const metadata: Metadata = {
  title: "Menu Categories | Vendor Dashboard",
  description: "Manage your menu categories on FoodSub",
}

export default function CategoriesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Menu Categories"
        text="Organize your menu items into categories for easier navigation."
      >
      </DashboardHeader>
      <CategoryList />
    </DashboardShell>
  )
}

