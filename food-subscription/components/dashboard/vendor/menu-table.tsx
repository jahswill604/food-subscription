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
import { Input } from "@/components/ui/input"
import { Pencil, Trash2 } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
}

const initialMenuItems: MenuItem[] = [
  { id: 1, name: "Sushi Platter", description: "Assorted sushi rolls", price: 24.99, category: "Main Course" },
  { id: 2, name: "Miso Soup", description: "Traditional Japanese soup", price: 5.99, category: "Appetizer" },
  { id: 3, name: "Vegetarian Ramen", description: "Ramen with assorted vegetables", price: 18.50, category: "Main Course" },
  { id: 4, name: "Green Tea", description: "Traditional Japanese green tea", price: 3.50, category: "Beverage" },
]

export function MenuTable() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems)
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleEdit = (id: number) => {
    setEditingId(id)
  }

  const handleSave = (id: number) => {
    setEditingId(null)
    // Here you would typically save the changes to your backend
  }

  const handleDelete = (id: number) => {
    setMenuItems(menuItems.filter(item => item.id !== id))
    // Here you would typically delete the item from your backend
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menuItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              {editingId === item.id ? (
                <Input defaultValue={item.name} />
              ) : (
                item.name
              )}
            </TableCell>
            <TableCell>
              {editingId === item.id ? (
                <Input defaultValue={item.description} />
              ) : (
                item.description
              )}
            </TableCell>
            <TableCell>
              {editingId === item.id ? (
                <Input defaultValue={item.price.toString()} />
              ) : (
                `$${item.price.toFixed(2)}`
              )}
            </TableCell>
            <TableCell>
              {editingId === item.id ? (
                <Input defaultValue={item.category} />
              ) : (
                item.category
              )}
            </TableCell>
            <TableCell>
              {editingId === item.id ? (
                <Button onClick={() => handleSave(item.id)}>Save</Button>
              ) : (
                <Button variant="ghost" onClick={() => handleEdit(item.id)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              )}
              <Button variant="ghost" onClick={() => handleDelete(item.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

