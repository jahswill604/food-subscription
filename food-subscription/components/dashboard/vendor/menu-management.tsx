"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface MenuManagementProps extends React.HTMLAttributes<HTMLDivElement> {}

interface MenuItem {
  id: number
  name: string
  price: string
}

const initialMenuItems: MenuItem[] = [
  { id: 1, name: "Sushi Platter", price: "$24.99" },
  { id: 2, name: "Miso Soup", price: "$5.99" },
  { id: 3, name: "Vegetarian Ramen", price: "$18.50" },
  { id: 4, name: "Green Tea", price: "$3.50" },
]

export function MenuManagement({ className, ...props }: MenuManagementProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems)
  const [newItem, setNewItem] = useState({ name: "", price: "" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      setMenuItems([...menuItems, { id: Date.now(), ...newItem }])
      setNewItem({ name: "", price: "" })
      setIsDialogOpen(false)
    }
  }

  const handleViewAllItems = () => {
    router.push("/dashboard/vendor/menu")
  }

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Menu Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full mt-4">
              <Plus className="mr-2 h-4 w-4" /> Add New Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Menu Item</DialogTitle>
              <DialogDescription>
                Enter the details of the new menu item.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  id="price"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddItem}>Add Item</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button onClick={handleViewAllItems} className="w-full mt-4" variant="outline">
          View All Menu Items
        </Button>
      </CardContent>
    </Card>
  )
}

