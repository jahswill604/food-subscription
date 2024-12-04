import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MenuItem {
  id: string
  name: string
  description: string
}

interface SubscriptionCustomizationProps {
  vendorMenu: MenuItem[]
  onConfirm: (subscriptionDetails: any) => void
  onCancel: () => void
}

export function SubscriptionCustomization({ vendorMenu, onConfirm, onCancel }: SubscriptionCustomizationProps) {
  const [selectedMenuItems, setSelectedMenuItems] = useState<string[]>([])
  const [deliverySchedule, setDeliverySchedule] = useState<Record<string, string[]>>({})
  const [locations, setLocations] = useState<string[]>([''])
  const [generatedPlan, setGeneratedPlan] = useState<Record<string, any>>({})

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
    onConfirm({
      selectedMenuItems,
      deliverySchedule,
      locations,
      generatedPlan
    })
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          {/* Subscription customization content moved to dashboard/subscriptions/page.tsx */}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm Subscription</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

