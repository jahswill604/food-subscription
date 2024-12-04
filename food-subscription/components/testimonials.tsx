import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: "/placeholder.svg?height=100&width=100",
    quote: "FoodSub has revolutionized my dining experience. The variety and quality of meals are outstanding!",
  },
  {
    name: "Michael Chen",
    role: "Busy Professional",
    image: "/placeholder.svg?height=100&width=100",
    quote: "As someone with a hectic schedule, FoodSub has been a lifesaver. Delicious meals without the hassle!",
  },
  {
    name: "Emily Rodriguez",
    role: "Health-Conscious Diner",
    image: "/placeholder.svg?height=100&width=100",
    quote: "I love how FoodSub caters to my dietary needs. It's made eating healthy so much easier and more enjoyable.",
  },
  {
    name: "David Thompson",
    role: "Foodie Explorer",
    image: "/placeholder.svg?height=100&width=100",
    quote: "FoodSub has introduced me to so many amazing local restaurants. It's like a culinary adventure every month!",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 overflow-hidden" aria-labelledby="customer-testimonials">
      <div className="container mx-auto">
        <h2 id="customer-testimonials" className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative">
          <div className="flex animate-slide space-x-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-[300px]">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-4"
                    />
                    <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
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
          animation: slide 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

