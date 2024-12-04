import { Metadata } from "next"
import { notFound } from "next/navigation"
import { VendorDetails } from "@/components/vendor-details"
import { getVendorById } from "@/lib/vendors"

export const dynamicParams = true

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const vendor = await getVendorById(params.id)
  if (!vendor) {
    return {
      title: "Vendor Not Found",
    }
  }
  return {
    title: `${vendor.name} | FoodSub`,
    description: `Explore and subscribe to delicious meals from ${vendor.name} on FoodSub.`,
  }
}

export default async function VendorPage({ params }: { params: { id: string } }) {
  const vendor = await getVendorById(params.id)

  if (!vendor) {
    notFound()
  }

  return <VendorDetails vendor={vendor} />
}

