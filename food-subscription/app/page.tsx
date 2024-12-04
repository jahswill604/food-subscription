import { Navigation } from "@/components/nav"
import { HeroSection } from "@/components/hero"
import { TopVendors } from "@/components/top-vendors"
import { VendorSection } from "@/components/vendor-section"
import { FeaturesSection } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Partners } from "@/components/partners"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <TopVendors />
        <VendorSection />
        <FeaturesSection />
        <HowItWorks />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

