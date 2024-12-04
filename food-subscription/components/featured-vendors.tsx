import Image from "next/image"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const featuredVendors = [
  {
    id: 1,
    name: "Gourmet Delights",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "French",
    rating: 4.9,
    description: "Experience the finest French cuisine with our carefully crafted dishes.",
  },
  {
    id: 2,
    name: "Spice Paradise",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Indian",
    rating: 4.8,
    description: "Embark on a culinary journey through India with our authentic spice-infused meals.",
  },
  {
    id: 3,
    name: "Sushi Master",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Japanese",
    rating: 4.7,
    description: "Indulge in the art of sushi with our expert chefs' creations.",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Mexican",
    rating: 4.6,
    description: "Experience the vibrant flavors of Mexico with our authentic tacos and more.",
  },
  {
    id: 5,
    name: "Pasta Paradise",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Italian",
    rating: 4.8,
    description: "Savor the taste of Italy with our handmade pasta and traditional recipes.",
  },
]

export function FeaturedVendors() {
  return (
    <section className="py-12 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Vendors</h2>
      <div className="relative">
        <div className="flex animate-slide">
          {[...featuredVendors, ...featuredVendors].map((vendor, index) => (
            <Card key={`${vendor.id}-${index}`} className="flex-shrink-0 w-[300px] m-2">
              <CardContent className="p-0">
                <Image
                  src={vendor.image}
                  alt={vendor.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{vendor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{vendor.cuisine}</p>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary mr-1" />
                    <span className="font-medium">{vendor.rating}</span>
                  </div>
                  <p className="text-sm">{vendor.description}</p>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">View Menu</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

