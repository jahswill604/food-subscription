import { Check } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for individuals",
    features: [
      "4 meals per month",
      "Choose from 2 vendors",
      "Basic customization",
      "Email support",
    ],
  },
  {
    name: "Popular",
    price: "$199",
    description: "Best for small families",
    features: [
      "8 meals per month",
      "Choose from 4 vendors",
      "Full customization",
      "Priority support",
      "Free delivery",
    ],
  },
  {
    name: "Premium",
    price: "$299",
    description: "For food enthusiasts",
    features: [
      "12 meals per month",
      "Access to all vendors",
      "Premium customization",
      "24/7 priority support",
      "Free delivery",
      "Exclusive tastings",
      "Monthly chef meetups",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.name === "Popular"
                  ? "border-primary shadow-lg scale-105 md:scale-110"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.name === "Popular" ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans include a 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}

