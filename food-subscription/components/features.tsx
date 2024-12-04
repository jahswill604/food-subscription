import { Clock, Shield, Truck, Utensils } from 'lucide-react'

const features = [
  {
    name: "Monthly Delivery",
    description:
      "Get your favorite meals delivered fresh to your door every month",
    icon: Truck,
  },
  {
    name: "Quality Guaranteed",
    description:
      "All our vendors are carefully selected and regularly audited for quality",
    icon: Shield,
  },
  {
    name: "Save Time",
    description:
      "No more meal planning or grocery shopping. We take care of everything",
    icon: Clock,
  },
  {
    name: "Variety",
    description:
      "Choose from a wide selection of cuisines and dietary preferences",
    icon: Utensils,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose Our Service
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to enjoy great food without the hassle
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{feature.name}</h3>
              <p className="mt-2 text-center text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

