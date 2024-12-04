"use client"

import { useState } from "react"
import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { VendorOverview } from "@/components/dashboard/vendor/vendor-overview"
import { RecentOrders } from "@/components/dashboard/vendor/recent-orders"
import { MenuManagement } from "@/components/dashboard/vendor/menu-management"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { useRouter } from "next/navigation"

export const metadata: Metadata = {
  title: "Vendor Dashboard | FoodSub",
  description: "Manage your restaurant on FoodSub",
}

export default function VendorDashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleViewAnalytics = () => {
    setIsLoading(true)
    router.push("/dashboard/vendor/analytics")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Vendor Dashboard"
        text="Welcome back! Here's an overview of your restaurant's performance."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <VendorOverview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentOrders className="col-span-4" />
        <MenuManagement className="col-span-3" />
      </div>
      <div className="mt-6 flex justify-end">
        <Button onClick={handleViewAnalytics} disabled={isLoading}>
          {isLoading ? "Loading..." : (
            <>
              View Detailed Analytics <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </DashboardShell>
  )
}

