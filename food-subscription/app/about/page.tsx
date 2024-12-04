import Image from "next/image"
import { Navigation } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Utensils, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl font-bold mb-8 text-center">About FoodSub</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                FoodSub is a revolutionary food subscription service that connects food lovers with the best local restaurants. Our mission is to make gourmet dining accessible and convenient for everyone.
              </p>
              <p className="text-lg mb-4">
                Founded in 2023, we've quickly grown to partner with hundreds of top-rated restaurants across the country, delivering thousands of meals every month.
              </p>
              <p className="text-lg">
                At FoodSub, we believe in supporting local businesses, reducing food waste, and bringing people together through the joy of great food.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="FoodSub Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <CheckCircle className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                  <p>We partner only with the best restaurants to ensure every meal is exceptional.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                  <p>We support local businesses and foster a sense of community through food.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Utensils className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Culinary Diversity</h3>
                  <p>We celebrate diverse cuisines and cater to various dietary preferences.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Growing Local Economies</h3>
                    <p>We've helped our partner restaurants increase their revenue by an average of 30%.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Creating Jobs</h3>
                    <p>Our platform has created over 1,000 new jobs in the food industry.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Utensils className="h-6 w-6 text-primary mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Reducing Food Waste</h3>
                    <p>Our subscription model has helped reduce food waste by 25% for our partner restaurants.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="FoodSub Impact"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join the FoodSub Community</h2>
            <p className="text-lg mb-8">Experience the best local cuisine, support your community, and simplify your meals.</p>
            <Button size="lg" variant="secondary" asChild>
              <a href="/signup">Get Started Today</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

