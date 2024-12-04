import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VendorProfileSettings } from "@/components/dashboard/vendor/vendor-profile-settings"
import { VendorAccountSettings } from "@/components/dashboard/vendor/vendor-account-settings"
import { VendorNotificationSettings } from "@/components/dashboard/vendor/vendor-notification-settings"

export const metadata: Metadata = {
  title: "Settings | Vendor Dashboard",
  description: "Manage your vendor account settings on FoodSub",
}

export default function VendorSettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage your vendor account settings and preferences."
      />
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <VendorProfileSettings />
        </TabsContent>
        <TabsContent value="account">
          <VendorAccountSettings />
        </TabsContent>
        <TabsContent value="notifications">
          <VendorNotificationSettings />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

