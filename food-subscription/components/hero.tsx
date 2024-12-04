import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center lg:pt-32">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            loading="lazy"
            aria-hidden="true"
          >
            <source src="/food-background.mp4" type="video/mp4" />
            <img src="/food-background-fallback.jpg" alt="Various delicious meals" className="w-full h-full object-cover" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" aria-label="Dark overlay on top of the video background" />
        <div className="mx-auto max-w-3xl relative z-10">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Your Favorite Food,{" "}
            <span className="text-accent">Delivered Monthly</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Subscribe to your favorite restaurants and get fresh, delicious meals
            delivered to your door every month. Save time and money while enjoying
            the best local cuisine.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Call to action">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#vendors">
                Browse Vendors <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  )
}

