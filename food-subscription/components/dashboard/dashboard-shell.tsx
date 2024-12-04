import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { MobileNav } from "@/components/dashboard/mobile-nav"
import Link from "next/link"
import { Bell } from 'lucide-react'
import { LayoutDashboard, Utensils, ClipboardList, Package, BarChart, Settings, ListTree, Repeat, Users, Heart, User, CreditCard } from 'lucide-react'

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link href="/dashboard" className="text-2xl font-bold">FoodSub</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/notifications" className="text-sm font-medium text-muted-foreground hover:text-primary">
              <Bell className="h-5 w-5" />
            </Link>
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[200px_1fr] md:gap-6 md:py-6">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <nav className="space-y-6 p-4">
  <div>
    <h3 className="mb-2 px-2 text-lg font-semibold tracking-tight">Dashboard</h3>
    <div className="space-y-1">
      <Link href="/dashboard" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-muted">
        <LayoutDashboard className="h-4 w-4" />
        Overview
      </Link>
      <Link href="/dashboard/subscriptions" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-muted">
        <Package className="h-4 w-4" />
        Subscriptions
      </Link>
      <Link href="/dashboard/orders" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-muted">
        <ClipboardList className="h-4 w-4" />
        Orders
      </Link>
      <Link href="/dashboard/favorites" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-muted">
        <Heart className="h-4 w-4" />
        Favorites
      </Link>
    </div>
  </div>
  <div>
    <h3 className="mb-2 px-2 text-lg font-semibold tracking-tight">Account</h3>
    <div className="space-y-1">
      <Link href="/dashboard/profile" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-muted">
        <User className="h-4 w-4" />
        Profile
      </Link>
      <Link href="/dashboard/billing" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-muted">
        <CreditCard className="h-4 w-4" />
        Billing
      </Link>
      <Link href="/dashboard/settings" className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-muted">
        <Settings className="h-4 w-4" />
        Settings
      </Link>
    </div>
  </div>
</nav>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}

