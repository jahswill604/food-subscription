"use client"

import { useState } from "react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Order {
  id: string
  customer: string
  items: string
  total: string
  status: 'Pending' | 'Preparing' | 'Ready for Pickup' | 'Delivered'
  date: string
}

const initialOrders: Order[] = [
  { id: "ORD001", customer: "John Doe", items: "2x Sushi Platter, 1x Miso Soup", total: "$42.99", status: "Preparing", date: "2023-06-01" },
  { id: "ORD002", customer: "Jane Smith", items: "1x Vegetarian Ramen, 2x Green Tea", total: "$28.50", status: "Ready for Pickup", date: "2023-06-02" },
  { id: "ORD003", customer: "Bob Johnson", items: "3x California Roll, 1x Edamame", total: "$35.75", status: "Delivered", date: "2023-06-03" },
  { id: "ORD004", customer: "Alice Brown", items: "1x Sushi Platter, 2x Miso Soup", total: "$36.97", status: "Pending", date: "2023-06-04" },
]

export function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>(initialOrders)

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
    // Here you would typically update the order status in your backend
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.items}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>
              <Badge variant={order.status === 'Delivered' ? 'secondary' : 'default'}>
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <Select
                value={order.status}
                onValueChange={(value: Order['status']) => handleStatusChange(order.id, value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Change status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Preparing">Preparing</SelectItem>
                  <SelectItem value="Ready for Pickup">Ready for Pickup</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

