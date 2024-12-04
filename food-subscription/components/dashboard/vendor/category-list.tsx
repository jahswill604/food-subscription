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

interface Category {
  id: number
  name: string
  description: string
  itemCount: number
}

const initialCategories: Category[] = [
  { id: 1, name: "Appetizers", description: "Small dishes to start your meal", itemCount: 8 },
  { id: 2, name: "Main Courses", description: "Hearty entrees for your main meal", itemCount: 12 },
  { id: 3, name: "Desserts", description: "Sweet treats to end your meal", itemCount: 6 },
  { id: 4, name: "Beverages", description: "Refreshing drinks and cocktails", itemCount: 10 },
]

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>(initialCategories)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newCategory, setNewCategory] = useState<Omit<Category, 'id'>>({ name: '', description: '', itemCount: 0 })

  const handleEdit = (category: Category) => {
    setEditingCategory(category)
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingCategory) {
      setCategories(categories.map(cat => cat.id === editingCategory.id ? editingCategory : cat))
    } else {
      const newId = Math.max(...categories.map(c => c.id)) + 1
      setCategories([...categories, { ...newCategory, id: newId }])
    }
    setIsDialogOpen(false)
    setEditingCategory(null)
    setNewCategory({ name: '', description: '', itemCount: 0 })
  }

  const handleDelete = (id: number) => {
    setCategories(categories.filter(category => category.id !== id))
  }

  const handleAddNew = () => {
    setEditingCategory(null)
    setNewCategory({ name: '', description: '', itemCount: 0 })
    setIsDialogOpen(true)
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add New Category
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>{category.itemCount}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => handleEdit(category)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(category.id)}>
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
            <DialogTitle>{editingCategory ? 'Edit Category' : 'Add New Category'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input
                id="name"
                value={editingCategory?.name ?? newCategory.name}
                onChange={(e) => editingCategory 
                  ? setEditingCategory({...editingCategory, name: e.target.value})
                  : setNewCategory({...newCategory, name: e.target.value})
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                id="description"
                value={editingCategory?.description ?? newCategory.description}
                onChange={(e) => editingCategory
                  ? setEditingCategory({...editingCategory, description: e.target.value})
                  : setNewCategory({...newCategory, description: e.target.value})
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="itemCount" className="text-right">Item Count</Label>
              <Input
                id="itemCount"
                type="number"
                value={editingCategory?.itemCount ?? newCategory.itemCount}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 0
                  editingCategory
                    ? setEditingCategory({...editingCategory, itemCount: value})
                    : setNewCategory({...newCategory, itemCount: value})
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

