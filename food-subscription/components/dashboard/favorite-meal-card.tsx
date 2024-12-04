import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'

interface FavoriteMeal {
  id: string
  name: string
  vendor: string
  image: string
}

interface FavoriteMealCardProps {
  meal: FavoriteMeal
}

export function FavoriteMealCard({ meal }: FavoriteMealCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-square relative mb-2">
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h4 className="font-semibold">{meal.name}</h4>
        <p className="text-sm text-muted-foreground">{meal.vendor}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Heart className="mr-2 h-4 w-4 fill-current" /> Unfavorite
        </Button>
      </CardFooter>
    </Card>
  )
}

