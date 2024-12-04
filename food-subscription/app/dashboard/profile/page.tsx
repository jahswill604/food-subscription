import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const metadata: Metadata = {
  title: "Profile | Dashboard",
  description: "Manage your FoodSub profile",
}

export default function ProfilePage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Profile"
        text="Manage your FoodSub profile and personal information."
      />
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              <div className="flex items-center space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/avatars/01.png" alt="@username" />
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <Button>Change Avatar</Button>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Lee" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="alex@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="dietaryPreferences">Dietary Preferences</Label>
                  <Input id="dietaryPreferences" defaultValue="Vegetarian, Gluten-free" />
                </div>
                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Input id="allergies" defaultValue="Nuts, Shellfish" />
                </div>
              </div>
              <Button type="submit">Update Preferences</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

