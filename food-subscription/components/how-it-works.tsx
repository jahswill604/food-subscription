export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started with your food subscription in just a few steps
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="relative text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
              1
            </div>
            <h3 className="mt-4 text-xl font-semibold">Choose Your Vendors</h3>
            <p className="mt-2 text-muted-foreground">
              Browse our selection of top-rated restaurants and select your
              favorites
            </p>
          </div>
          <div className="relative text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
              2
            </div>
            <h3 className="mt-4 text-xl font-semibold">Select Your Plan</h3>
            <p className="mt-2 text-muted-foreground">
              Choose how many meals you want and how often you want them delivered
            </p>
          </div>
          <div className="relative text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
              3
            </div>
            <h3 className="mt-4 text-xl font-semibold">Enjoy Your Meals</h3>
            <p className="mt-2 text-muted-foreground">
              Receive your fresh, delicious meals right at your doorstep
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

