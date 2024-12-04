import Image from "next/image"
import { StarIcon, CheckIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react'
import { SubscriptionCustomization } from "./subscription-customization"
import { Navigation } from "@/components/nav"
import { Footer } from "@/components/footer"

interface Vendor {
  id: string
  name: string
  image: string
  cuisine: string
  rating: number
  description: string
  menu: {
    category: string
    items: {
      id: string
      name: string
      description: string
      image: string
      userRating?: number
    }[]
  }[]
}

export function VendorDetails({ vendor }: { vendor: Vendor }) {
  const [userRating, setUserRating] = useState(0)
  const [showSubscriptionCustomization, setShowSubscriptionCustomization] = useState(false)

  const handleRating = (rating: number) => {
    setUserRating(rating)
  }

  const submitRating = () => {
    // Here you would typically send the rating to your backend
    console.log(`Submitting rating: ${userRating}`)
    // You could also add a toast notification here to confirm submission
  }

  const handleItemRating = (itemId: string, rating: number) => {
    // Here you would typically update the rating in your state or send it to your backend
    console.log(`Rating item ${itemId} with ${rating} stars`)
    // You could also add a toast notification here to confirm the rating
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={vendor.image}
            alt={vendor.name}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{vendor.name}</h1>
          <p className="text-lg text-muted-foreground mb-4">{vendor.cuisine}</p>
          <div className="flex items-center mb-4">
            <StarIcon className="h-5 w-5 fill-primary text-primary mr-1" />
            <span className="font-medium">{vendor.rating}</span>
          </div>
          <p className="mb-6">{vendor.description}</p>
          <div className="mt-4">
            <p className="mb-2">Rate this vendor:</p>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    star <= userRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => handleRating(star)}
                />
              ))}
            </div>
            <Button onClick={submitRating} disabled={userRating === 0}>
              Submit Rating
            </Button>
          </div>
        </div>
      </div>
      <Tabs defaultValue="menu" className="mt-12">
  <TabsList className="grid w-full grid-cols-3">
    <TabsTrigger value="menu">Menu</TabsTrigger>
    <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
    <TabsTrigger value="feedback">Customer Feedback</TabsTrigger>
  </TabsList>
  <TabsContent value="menu">
    {vendor.menu.map((category) => (
      <div key={category.category} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{category.category}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {category.items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
            <div className="relative h-32">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-3">
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
              <div className="mt-2">
                <p className="text-xs font-medium mb-1">Rate:</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`h-4 w-4 cursor-pointer ${
                        star <= (item.userRating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => handleItemRating(item.id, star)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
            </Card>
          ))}
        </div>
      </div>
    ))}
  </TabsContent>
  <TabsContent value="plans">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Weekly Plan</h3>
          <p className="text-sm text-muted-foreground mb-4">Perfect for regular foodies</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>4 meals per week</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Free delivery</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Weekly menu updates</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setShowSubscriptionCustomization(true)}>Subscribe</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
          <p className="text-sm text-muted-foreground mb-4">Great value for food lovers</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>16 meals per month</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Free delivery</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>10% discount</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setShowSubscriptionCustomization(true)}>Subscribe</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">3-Month Plan</h3>
          <p className="text-sm text-muted-foreground mb-4">Commit to delicious meals</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>48 meals over 3 months</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Free delivery</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>15% discount</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setShowSubscriptionCustomization(true)}>Subscribe</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">6-Month Plan</h3>
          <p className="text-sm text-muted-foreground mb-4">Long-term foodie commitment</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>96 meals over 6 months</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Free delivery</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>20% discount</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setShowSubscriptionCustomization(true)}>Subscribe</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Yearly Plan</h3>
          <p className="text-sm text-muted-foreground mb-4">Ultimate foodie experience</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>192 meals over 12 months</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>Free priority delivery</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>25% discount</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setShowSubscriptionCustomization(true)}>Subscribe</Button>
        </CardFooter>
      </Card>
    </div>
  </TabsContent>
  <TabsContent value="feedback">
    <p className="text-lg mb-4">What our customers are saying:</p>
    {/* Add customer feedback components here */}
    <p>Customer feedback coming soon...</p>
  </TabsContent>
</Tabs>
      {showSubscriptionCustomization && (
        <SubscriptionCustomization
          vendorMenu={vendor.menu.flatMap(category => category.items)}
          onConfirm={(subscriptionDetails) => {
            console.log('Subscription confirmed:', subscriptionDetails)
            // Here you would typically send this data to your backend
            setShowSubscriptionCustomization(false)
          }}
          onCancel={() => setShowSubscriptionCustomization(false)}
        />
      )}
      </div>
      <Footer />
    </>
  )
}

