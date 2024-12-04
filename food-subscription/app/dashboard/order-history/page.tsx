import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon, ChevronLeft, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Order History | Dashboard",
  description: "View your complete order history with FoodSub",
}

const orderHistory = [
  { id: "1234", date: "2023-11-28", vendor: "Sushi Master", meal: "Japanese Delights", status: "Delivered", total: "$24.99", rating: 5 },
  { id: "1233", date: "2023-11-21", vendor: "Taco Fiesta", meal: "Mexican Feast", status: "Delivered", total: "$19.99", rating: 4 },
  { id: "1232", date: "2023-11-14", vendor: "Pasta Paradise", meal: "Italian Dinner", status: "Delivered", total: "$22.99", rating: 5 },
  { id: "1231", date: "2023-11-07", vendor: "Green Gourmet", meal: "Vegan Delight", status: "Delivered", total: "$18.99", rating: 4 },
  { id: "1230", date: "2023-10-31", vendor: "Burger Bliss", meal: "Classic American", status: "Delivered", total: "$21.99", rating: 5 },
]

export default function OrderHistoryPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Order History"
        text="View your complete order history and meal ratings."
      />
      <Card>
        <CardHeader>
          <CardTitle>Your Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Meal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderHistory.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.vendor}</TableCell>
                  <TableCell>{order.meal}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{order.status}</Badge>
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < order.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

