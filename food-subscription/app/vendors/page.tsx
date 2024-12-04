import { Metadata } from "next"
import { Navigation } from "@/components/nav"
import { VendorHero } from "@/components/vendor-hero"
import { VendorSearch } from "@/components/vendor-search"
import { FeaturedVendors } from "@/components/featured-vendors"
import { VendorSection } from "@/components/vendor-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Vendors | FoodSub",
  description: "Explore our curated selection of top-rated food vendors offering delicious meals for your subscription.",
}

export default function VendorsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <VendorHero />
        <div className="container mx-auto px-4 py-8">
          <VendorSearch />
          <FeaturedVendors />
          <VendorSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

