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
import { Pencil, Trash2, Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface InventoryItem {
  id: number
  name: string
  quantity: number
  unit: string
  reorderPoint: number
}

const initialInventory: InventoryItem[] = [
  { id: 1, name: "Rice", quantity: 50, unit: "kg", reorderPoint: 20 },
  { id: 2, name: "Nori (Seaweed)", quantity: 1000, unit: "sheets", reorderPoint: 200 },
  { id: 3, name: "Salmon", quantity: 30, unit: "kg", reorderPoint: 10 },
  { id: 4, name: "Soy Sauce", quantity: 20, unit: "liters", reorderPoint: 5 },
]

export function InventoryTable() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory)
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newItem, setNewItem] = useState<Omit<InventoryItem, 'id'>>({ name: '', quantity: 0, unit: '', reorderPoint: 0 })

  const handleEdit = (item: InventoryItem) => {
    setEditingItem(item)
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingItem) {
      setInventory(inventory.map(item => item.id === editingItem.id ? editingItem : item))
    } else {
      const newId = Math.max(...inventory.map(i => i.id)) + 1
      setInventory([...inventory, { ...newItem, id: newId }])
    }
    setIsDialogOpen(false)
    setEditingItem(null)
    setNewItem({ name: '', quantity: 0, unit: '', reorderPoint: 0 })
  }

  const handleDelete = (id: number) => {
    setInventory(inventory.filter(item => item.id !== id))
  }

  const handleAddNew = () => {
    setEditingItem(null)
    setNewItem({ name: '', quantity: 0, unit: '', reorderPoint: 0 })
    setIsDialogOpen(true)
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Reorder Point</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{item.reorderPoint}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => handleEdit(item)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingItem ? 'Edit Inventory Item' : 'Add New Inventory Item'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input
                id="name"
                value={editingItem?.name ?? newItem.name}
                onChange={(e) => editingItem 
                  ? setEditingItem({...editingItem, name: e.target.value})
                  : setNewItem({...newItem, name: e.target.value})
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={editingItem?.quantity ?? newItem.quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 0
                  editingItem
                    ? setEditingItem({...editingItem, quantity: value})
                    : setNewItem({...newItem, quantity: value})
                }}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unit" className="text-right">Unit</Label>
              <Input
                id="unit"
                value={editingItem?.unit ?? newItem.unit}
                onChange={(e) => editingItem
                  ? setEditingItem({...editingItem, unit: e.target.value})
                  : setNewItem({...newItem, unit: e.target.value})
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reorderPoint" className="text-right">Reorder Point</Label>
              <Input
                id="reorderPoint"
                type="number"
                value={editingItem?.reorderPoint ?? newItem.reorderPoint}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 0
                  editingItem
                    ? setEditingItem({...editingItem, reorderPoint: value})
                    : setNewItem({...newItem, reorderPoint: value})
                }}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

