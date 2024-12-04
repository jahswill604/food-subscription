"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function VendorNotificationSettings() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Here you would typically update the notification settings in your backend
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="emailNotifications">Email Notifications</Label>
            <Switch id="emailNotifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="smsNotifications">SMS Notifications</Label>
            <Switch id="smsNotifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="pushNotifications">Push Notifications</Label>
            <Switch id="pushNotifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="orderUpdates">Order Updates</Label>
            <Switch id="orderUpdates" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="promotionalEmails">Promotional Emails</Label>
            <Switch id="promotionalEmails" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

