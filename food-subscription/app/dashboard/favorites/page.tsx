import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FavoriteMealCard } from "@/components/dashboard/favorite-meal-card"
import { FavoriteVendorCard } from "@/components/dashboard/favorite-vendor-card"

export const metadata: Metadata = {
  title: "Favorites | Dashboard",
  description: "View and manage your favorite meals and vendors",
}

const favoriteMeals = [
  { id: "1", name: "Grilled Salmon", vendor: "Seafood Delights", image: "/placeholder.svg?height=100&width=100" },
  { id: "2", name: "Vegetarian Pasta", vendor: "Pasta Paradise", image: "/placeholder.svg?height=100&width=100" },
  { id: "3", name: "Chicken Stir Fry", vendor: "Asian Fusion", image: "/placeholder.svg?height=100&width=100" },
]

const favoriteVendors = [
  { id: "1", name: "Seafood Delights", cuisine: "Seafood", rating: 4.8, image: "/placeholder.svg?height=100&width=100" },
  { id: "2", name: "Pasta Paradise", cuisine: "Italian", rating: 4.7, image: "/placeholder.svg?height=100&width=100" },
  { id: "3", name: "Asian Fusion", cuisine: "Asian", rating: 4.9, image: "/placeholder.svg?height=100&width=100" },
]

export default function FavoritesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Favorites"
        text="View and manage your favorite meals and vendors."
      />
      <Tabs defaultValue="meals">
        <TabsList>
          <TabsTrigger value="meals">Favorite Meals</TabsTrigger>
          <TabsTrigger value="vendors">Favorite Vendors</TabsTrigger>
        </TabsList>
        <TabsContent value="meals">
          <Card>
            <CardHeader>
              <CardTitle>Favorite Meals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {favoriteMeals.map((meal) => (
                  <FavoriteMealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vendors">
          <Card>
            <CardHeader>
              <CardTitle>Favorite Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {favoriteVendors.map((vendor) => (
                  <FavoriteVendorCard key={vendor.id} vendor={vendor} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

