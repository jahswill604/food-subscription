import Image from "next/image"
import { Star } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const topVendors = [
  {
    id: 1,
    name: "Gourmet Delights",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    cuisine: "French",
  },
  {
    id: 2,
    name: "Spice Paradise",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    cuisine: "Indian",
  },
  {
    id: 3,
    name: "Sushi Master",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    cuisine: "Japanese",
  },
  {
    id: 4,
    name: "Mama's Kitchen",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    cuisine: "Italian",
  },
  {
    id: 5,
    name: "Taco Fiesta",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    cuisine: "Mexican",
  },
]

export function TopVendors() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 overflow-hidden" aria-labelledby="top-rated-vendors">
      <div className="container mx-auto">
        <div className="space-y-2 text-center">
          <h2 id="top-rated-vendors" className="text-3xl font-bold tracking-tighter sm:text-5xl">Top Rated Vendors</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400 mx-auto">
            Discover our highest-rated culinary partners, as voted by our community of food enthusiasts.
          </p>
        </div>
        <div className="relative mt-8">
          <div className="flex animate-slide space-x-8">
            {[...topVendors, ...topVendors].map((vendor, index) => (
              <Card key={`${vendor.id}-${index}`} className="flex-shrink-0 w-[250px]">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={vendor.image}
                        alt={vendor.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{vendor.name}</h3>
                      <p className="text-sm text-muted-foreground">{vendor.cuisine}</p>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="h-5 w-5 fill-primary text-primary mr-1" />
                        <span className="text-sm font-medium">{vendor.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full" aria-label={`View menu for ${vendor.name}`}>
                    View Menu
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
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
          animation: slide 35s linear infinite;
        }
      `}</style>
    </section>
  )
}

