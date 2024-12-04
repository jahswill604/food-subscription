import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Utensils, ChevronLeft, ChevronRight } from 'lucide-react'
import { MealCard } from "@/components/dashboard/meal-card"

export const metadata: Metadata = {
  title: "Meal Planner | Dashboard",
  description: "Plan your meals with FoodSub",
}

const upcomingMeals = [
  { id: "1", name: "Grilled Salmon", date: "Monday, Dec 4", image: "/placeholder.svg?height=100&width=100" },
  { id: "2", name: "Vegetarian Pasta", date: "Tuesday, Dec 5", image: "/placeholder.svg?height=100&width=100" },
  { id: "3", name: "Chicken Stir Fry", date: "Wednesday, Dec 6", image: "/placeholder.svg?height=100&width=100" },
]

export default function MealPlannerPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Meal Planner"
        text="Plan your meals and customize your food preferences."
      >
        <Button>
          <Utensils className="mr-2 h-4 w-4" /> Create Meal Plan
        </Button>
      </DashboardHeader>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Weekly Meal Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous Week
              </Button>
              <Button variant="outline" size="sm">
                Next Week <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <Calendar className="w-full" />
          </CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Meals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

