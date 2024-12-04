import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

const topSellingItems = [
  { name: "Sushi Platter", quantity: 150, revenue: 3747.50 },
  { name: "Vegetarian Ramen", quantity: 120, revenue: 2220.00 },
  { name: "Green Tea", quantity: 200, revenue: 700.00 },
  { name: "Miso Soup", quantity: 180, revenue: 1078.20 },
  { name: "California Roll", quantity: 130, revenue: 1625.00 },
]

export function TopSellingItems() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Quantity Sold</TableHead>
              <TableHead>Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topSellingItems.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.revenue.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

