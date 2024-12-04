import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Edit2 } from 'lucide-react'

interface Meal {
  id: string
  name: string
  date: string
  image: string
}

interface MealCardProps {
  meal: Meal
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Image
            src={meal.image}
            alt={meal.name}
            width={60}
            height={60}
            className="rounded-md"
          />
          <div className="flex-1">
            <h4 className="font-semibold">{meal.name}</h4>
            <p className="text-sm text-muted-foreground flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> {meal.date}
            </p>
          </div>
          <Button variant="ghost" size="sm">
            <Edit2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

