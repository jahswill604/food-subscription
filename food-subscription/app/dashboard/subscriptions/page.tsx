"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SubscriptionCard } from "@/components/dashboard/subscription-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from 'lucide-react'

interface Subscription {
  id: string
  name: string
  plan: string
  nextDelivery: string
  image: string
}

export default function SubscriptionsPage() {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false)
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: "1",
      name: "Gourmet Delights",
      plan: "Weekly Plan",
      nextDelivery: "Monday, Dec 4",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "2",
      name: "Veggie Paradise",
      plan: "Bi-Weekly Plan",
      nextDelivery: "Thursday, Dec 7",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "3",
      name: "Protein Power",
      plan: "Monthly Plan",
      nextDelivery: "Monday, Dec 11",
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  const addNewSubscription = (newSubscription: Subscription) => {
    setSubscriptions([...subscriptions, newSubscription])
    setShowSubscriptionForm(false)
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Subscriptions"
        text="Manage your active meal subscriptions."
      >
        <Button onClick={() => setShowSubscriptionForm(!showSubscriptionForm)}>
          <Plus className="mr-2 h-4 w-4" /> Add New Subscription
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((subscription) => (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        ))}
      </div>
      {showSubscriptionForm && <SubscriptionCustomization onConfirm={addNewSubscription} onCancel={() => setShowSubscriptionForm(false)} />}
    </DashboardShell>
  )
}

interface SubscriptionCustomizationProps {
  onConfirm: (newSubscription: Subscription) => void
  onCancel: () => void
}

function SubscriptionCustomization({ onConfirm, onCancel }: SubscriptionCustomizationProps) {
  const [selectedMenuItems, setSelectedMenuItems] = useState<string[]>([])
  const [deliverySchedule, setDeliverySchedule] = useState<Record<string, string[]>>({})
  const [locations, setLocations] = useState<string[]>([''])
  const [generatedPlan, setGeneratedPlan] = useState<Record<string, any>>({})
  const [subscriptionDuration, setSubscriptionDuration] = useState<string>("")

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const mealtimes = ['Breakfast', 'Lunch', 'Dinner']

  const handleMenuItemToggle = (itemId: string) => {
    setSelectedMenuItems(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    )
  }

  const handleDeliveryScheduleChange = (day: string, mealtime: string) => {
    setDeliverySchedule(prev => ({
      ...prev,
      [day]: prev[day]?.includes(mealtime) 
        ? prev[day].filter(m => m !== mealtime)
        : [...(prev[day] || []), mealtime]
    }))
  }

  const handleLocationChange = (index: number, value: string) => {
    setLocations(prev => {
      const newLocations = [...prev]
      newLocations[index] = value
      return newLocations
    })
  }

  const addLocation = () => {
    setLocations(prev => [...prev, ''])
  }

  const generatePlan = () => {
    const plan: Record<string, any> = {}
    
    Object.entries(deliverySchedule).forEach(([day, mealtimes]) => {
      plan[day] = {}
      mealtimes.forEach(mealtime => {
        plan[day][mealtime] = selectedMenuItems[Math.floor(Math.random() * selectedMenuItems.length)]
      })
    })

    setGeneratedPlan(plan)
  }

  const handleConfirm = () => {
    const newSubscription: Subscription = {
      id: Date.now().toString(),
      name: `Custom Plan ${subscriptionDuration}`,
      plan: subscriptionDuration,
      nextDelivery: "Next available date",
      image: "/placeholder.svg?height=100&width=100",
    }
    onConfirm(newSubscription)
  }

  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Customize Your Subscription</h2>
        <Tabs defaultValue="menu">
          <TabsList>
            <TabsTrigger value="menu">Select Menu Items</TabsTrigger>
            <TabsTrigger value="schedule">Delivery Schedule</TabsTrigger>
            <TabsTrigger value="locations">Delivery Locations</TabsTrigger>
            <TabsTrigger value="duration">Subscription Duration</TabsTrigger>
            <TabsTrigger value="review">Review Plan</TabsTrigger>
          </TabsList>
          <TabsContent value="menu">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Item 1', 'Item 2', 'Item 3'].map(item => (
                <div key={item} className="flex items-start space-x-2">
                  <Checkbox
                    id={item}
                    checked={selectedMenuItems.includes(item)}
                    onCheckedChange={() => handleMenuItemToggle(item)}
                  />
                  <Label htmlFor={item} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {item}
                    <p className="text-sm text-muted-foreground">Description of {item}</p>
                  </Label>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="schedule">
            <div className="space-y-4">
              {daysOfWeek.map(day => (
                <div key={day} className="flex items-center space-x-4">
                  <Label className="w-24">{day}</Label>
                  {mealtimes.map(mealtime => (
                    <Checkbox
                      key={`${day}-${mealtime}`}
                      id={`${day}-${mealtime}`}
                      checked={deliverySchedule[day]?.includes(mealtime)}
                      onCheckedChange={() => handleDeliveryScheduleChange(day, mealtime)}
                    />
                  ))}
                  <div className="flex space-x-2">
                    <Label htmlFor={`${day}-Breakfast`}>Breakfast</Label>
                    <Label htmlFor={`${day}-Lunch`}>Lunch</Label>
                    <Label htmlFor={`${day}-Dinner`}>Dinner</Label>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="locations">
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    placeholder="Enter delivery address"
                    value={location}
                    onChange={(e) => handleLocationChange(index, e.target.value)}
                  />
                  <Label>Location {index + 1}</Label>
                </div>
              ))}
              <Button onClick={addLocation}>Add Another Location</Button>
            </div>
          </TabsContent>
          <TabsContent value="duration">
            <div className="space-y-4">
              <Label htmlFor="subscription-duration">Select Subscription Duration</Label>
              <Select onValueChange={(value) => setSubscriptionDuration(value)}>
                <SelectTrigger id="subscription-duration">
                  <SelectValue placeholder="Choose duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                  <SelectItem value="1year">1 Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="review">
            <div className="space-y-4">
              <Button onClick={generatePlan}>Generate Plan</Button>
              {Object.entries(generatedPlan).map(([day, meals]) => (
                <div key={day}>
                  <h3 className="font-semibold">{day}</h3>
                  {Object.entries(meals as Record<string, string>).map(([mealtime, menuItemId]) => (
                    <div key={`${day}-${mealtime}`} className="flex items-center space-x-2">
                      <p>{mealtime}:</p>
                      <Select defaultValue={menuItemId}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a meal" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedMenuItems.map(itemId => (
                            <SelectItem key={itemId} value={itemId}>
                              {itemId}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              ))}
              <div className="mt-4">
                <h3 className="font-semibold">Subscription Duration</h3>
                <p>{subscriptionDuration ? subscriptionDuration : "Not selected"}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={handleConfirm}>Confirm Subscription</Button>
      </CardFooter>
    </Card>
  )
}

