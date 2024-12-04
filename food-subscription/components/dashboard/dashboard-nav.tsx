"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Utensils, Bell, Heart, Gift, LayoutDashboard, Package, CreditCard, Settings, Calendar, ClipboardList, TrendingUp, ListTree, Repeat } from 'lucide-react'
import { LogoutConfirmation } from "@/components/logout-confirmation"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Subscriptions",
    href: "/dashboard/subscriptions",
    icon: Package,
  },
  {
    title: "Upcoming Deliveries",
    href: "/dashboard/upcoming-deliveries",
    icon: Calendar,
  },
  {
    title: "Recent Orders",
    href: "/dashboard/recent-orders",
    icon: ClipboardList,
  },
  {
    title: "Meal Planner",
    href: "/dashboard/meal-planner",
    icon: Utensils,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Favorites",
    href: "/dashboard/favorites",
    icon: Heart,
  },
  {
    title: "Referrals",
    href: "/dashboard/referrals",
    icon: Gift,
  },
  {
    title: "Order History",
    href: "/dashboard/order-history",
    icon: TrendingUp,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Menu Management",
    href: "/dashboard/vendor/menu",
    icon: Utensils,
  },
  {
    title: "Inventory",
    href: "/dashboard/vendor/inventory",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/dashboard/vendor/orders",
    icon: ClipboardList,
  },
  {
    title: "Categories",
    href: "/dashboard/vendor/categories",
    icon: ListTree,
  },
  {
    title: "Subscriptions",
    href: "/dashboard/vendor/subscriptions",
    icon: Repeat,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2" aria-label="Dashboard Navigation">
      <div className="mb-2">
        <h3 className="mb-1 px-2 text-lg font-semibold tracking-tight">General</h3>
        {navItems.filter(item => !item.href.includes('/vendor')).map((item, index) => {
          const Icon = item.icon
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.href
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>
      <div>
        <h3 className="mb-1 px-2 text-lg font-semibold tracking-tight">Vendor Management</h3>
        {navItems.filter(item => item.href.includes('/vendor')).map((item, index) => {
          const Icon = item.icon
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.href
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>
      <LogoutConfirmation />
    </nav>
  )
}

