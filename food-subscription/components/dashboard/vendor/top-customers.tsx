import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

const topCustomers = [
  { name: "John Doe", orders: 25, totalSpent: 1250.00 },
  { name: "Jane Smith", orders: 22, totalSpent: 1100.00 },
  { name: "Bob Johnson", orders: 20, totalSpent: 1000.00 },
  { name: "Alice Brown", orders: 18, totalSpent: 900.00 },
  { name: "Charlie Davis", orders: 15, totalSpent: 750.00 },
]

export function TopCustomers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topCustomers.map((customer) => (
              <TableRow key={customer.name}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

