"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area" //Removed

interface Vendor {
  id: number
  name: string
  image: string
  cuisine: string
  rating: number
  price: string
  description: string
}

const vendors: Vendor[] = [
  {
    id: 1,
    name: "The Green Kitchen",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Vegetarian",
    rating: 4.8,
    price: "$$",
    description: "Fresh, organic vegetarian meals prepared with love",
  },
  {
    id: 2,
    name: "Pasta Paradise",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Italian",
    rating: 4.7,
    price: "$$",
    description: "Authentic Italian pasta made fresh daily",
  },
  {
    id: 3,
    name: "Sushi Master",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Japanese",
    rating: 4.9,
    price: "$$$",
    description: "Premium sushi and Japanese delicacies",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Mexican",
    rating: 4.6,
    price: "$",
    description: "Authentic Mexican street food experience",
  },
  {
    id: 5,
    name: "Mediterranean Delights",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "Mediterranean",
    rating: 4.7,
    price: "$$",
    description: "Healthy and delicious Mediterranean cuisine",
  },
  {
    id: 6,
    name: "Burger Bros",
    image: "/placeholder.svg?height=200&width=300",
    cuisine: "American",
    rating: 4.5,
    price: "$$",
    description: "Gourmet burgers and classic American fare",
  },
]

export function VendorSection() {
  // const scrollRef = React.useRef<HTMLDivElement>(null) //Removed

  // const scroll = (direction: "left" | "right") => { //Removed
  //   if (scrollRef.current) {
  //     const scrollAmount = 300
  //     scrollRef.current.scrollBy({
  //       left: direction === "left" ? -scrollAmount : scrollAmount,
  //       behavior: "smooth",
  //     })
  //   }
  // }

  return (
    <section className="py-12 w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">All Vendors</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {vendors.map((vendor) => (
          <Card
            key={vendor.id}
            className="w-full transition-transform hover:scale-[1.02]"
          >
            <CardContent className="p-0">
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <Image
                  src={vendor.image}
                  alt={vendor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg object-cover absolute inset-0"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">{vendor.name}</h3>
                  <span className="text-xs text-muted-foreground">{vendor.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{vendor.cuisine}</p>
                <p className="mt-1 text-xs line-clamp-2 whitespace-normal">
                  {vendor.description}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-3 pt-0">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-primary text-primary mr-0.5" />
                <span className="text-xs font-medium">{vendor.rating}</span>
              </div>
              <Button size="sm" variant="outline" className="text-xs py-1 px-2 h-auto" asChild>
                <Link href={`/vendors/${vendor.id}`}>View</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

