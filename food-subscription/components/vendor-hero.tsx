import { Button } from "@/components/ui/button"

export function VendorHero() {
  return (
    <section className="relative bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=1600"
          alt="Various dishes from our vendors"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Discover Our Culinary Partners
        </h1>
        <p className="text-xl mb-8">
          Explore a diverse range of cuisines from our carefully selected vendors, each offering unique and delicious meals for your subscription.
        </p>
        <Button size="lg" asChild>
          <a href="#vendor-search">Find Your Perfect Meal</a>
        </Button>
      </div>
    </section>
  )
}

