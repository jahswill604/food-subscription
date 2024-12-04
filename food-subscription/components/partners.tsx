import Image from "next/image"

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Partner 2", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Partner 3", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Partner 4", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Partner 5", logo: "/placeholder.svg?height=80&width=200" },
  { name: "Partner 6", logo: "/placeholder.svg?height=80&width=200" },
]

export function Partners() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="our-partners">
      <div className="container mx-auto">
        <h2 id="our-partners" className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="relative">
          <div className="flex animate-slide space-x-12">
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain"
                />
              </div>
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
          animation: slide 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

