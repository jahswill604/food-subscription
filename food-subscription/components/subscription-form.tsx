"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SubscriptionForm({ vendorId }: { vendorId: string }) {
  const [plan, setPlan] = useState("")

  const handleSubscribe = () => {
    // Here you would implement the subscription logic
    console.log(`Subscribing to vendor ${vendorId} with plan ${plan}`)
  }

  return (
    <div className="space-y-4">
      <Select value={plan} onValueChange={setPlan}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a subscription plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="weekly">Weekly Plan</SelectItem>
          <SelectItem value="biweekly">Bi-Weekly Plan</SelectItem>
          <SelectItem value="monthly">Monthly Plan</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSubscribe} disabled={!plan} className="w-full">
        Subscribe
      </Button>
    </div>
  )
}

