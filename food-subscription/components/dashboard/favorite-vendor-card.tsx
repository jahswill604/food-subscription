import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from 'lucide-react'

interface FavoriteVendor {
  id: string
  name: string
  cuisine: string
  rating: number
  image: string
}

interface FavoriteVendorCardProps {
  vendor: FavoriteVendor
}

export function FavoriteVendorCard({ vendor }: FavoriteVendorCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="aspect-square relative mb-2">
          <Image
            src={vendor.image}
            alt={vendor.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h4 className="font-semibold">{vendor.name}</h4>
        <p className="text-sm text-muted-foreground">{vendor.cuisine}</p>
        <div className="flex items-center mt-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
          <span className="text-sm font-medium">{vendor.rating}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Heart className="mr-2 h-4 w-4 fill-current" /> Unfavorite
        </Button>
      </CardFooter>
    </Card>
  )
}

