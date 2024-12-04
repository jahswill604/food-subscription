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
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SubscriptionPlan {
  id: number
  name: string
  description: string
  price: number
  duration: string
  status: 'Active' | 'Inactive'
}

const initialPlans: SubscriptionPlan[] = [
  { id: 1, name: "Basic Plan", description: "4 meals per month", price: 59.99, duration: "Monthly", status: "Active" },
  { id: 2, name: "Standard Plan", description: "8 meals per month", price: 99.99, duration: "Monthly", status: "Active" },
  { id: 3, name: "Premium Plan", description: "12 meals per month", price: 139.99, duration: "Monthly", status: "Active" },
  { id: 4, name: "Family Plan", description: "20 meals per month", price: 199.99, duration: "Monthly", status: "Inactive" },
]

export function SubscriptionList() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>(initialPlans)
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newPlan, setNewPlan] = useState<Omit<SubscriptionPlan, 'id'>>({ name: '', description: '', price: 0, duration: 'Monthly', status: 'Active' })

  const handleEdit = (plan: SubscriptionPlan) => {
    setEditingPlan(plan)
    setIsDialogOpen(true)
  }

  const handleSave = () => {
    if (editingPlan) {
      setPlans(plans.map(plan => plan.id === editingPlan.id ? editingPlan : plan))
    } else {
      const newId = Math.max(...plans.map(p => p.id)) + 1
      setPlans([...plans, { ...newPlan, id: newId }])
    }
    setIsDialogOpen(false)
    setEditingPlan(null)
    setNewPlan({ name: '', description: '', price: 0, duration: 'Monthly', status: 'Active' })
  }

  const handleDelete = (id: number) => {
    setPlans(plans.filter(plan => plan.id !== id))
  }

  const handleAddNew = () => {
    setEditingPlan(null)
    setNewPlan({ name: '', description: '', price: 0, duration: 'Monthly', status: 'Active' })
    setIsDialogOpen(true)
  }

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add New Plan
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell>{plan.name}</TableCell>
              <TableCell>{plan.description}</TableCell>
              <TableCell>${plan.price.toFixed(2)}</TableCell>
              <TableCell>{plan.duration}</TableCell>
              <TableCell>
                <Badge variant={plan.status === 'Active' ? 'default' : 'secondary'}>
                  {plan.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => handleEdit(plan)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(plan.id)}>
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
            <DialogTitle>{editingPlan ? 'Edit Subscription Plan' : 'Add New Subscription Plan'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input
                id="name"
                value={editingPlan?.name ?? newPlan.name}
                onChange={(e) => editingPlan 
                  ? setEditingPlan({...editingPlan, name: e.target.value})
                  : setNewPlan({...newPlan, name: e.target.value})
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                id="description"
                value={editingPlan?.description ?? newPlan.description}
                onChange={(e) => editingPlan
                  ? setEditingPlan({...editingPlan, description: e.target.value})
                  : setNewPlan({...newPlan, description: e.target.value})
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">Price</Label>
              <Input
                id="price"
                type="number"
                value={editingPlan?.price ?? newPlan.price}
                onChange={(e) => {
                  const value = parseFloat(e.target.value) || 0
                  editingPlan
                    ? setEditingPlan({...editingPlan, price: value})
                    : setNewPlan({...newPlan, price: value})
                }}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">Duration</Label>
              <Select
                value={editingPlan?.duration ?? newPlan.duration}
                onValueChange={(value) => editingPlan
                  ? setEditingPlan({...editingPlan, duration: value})
                  : setNewPlan({...newPlan, duration: value})
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">Status</Label>
              <Select
                value={editingPlan?.status ?? newPlan.status}
                onValueChange={(value: 'Active' | 'Inactive') => editingPlan
                  ? setEditingPlan({...editingPlan, status: value})
                  : setNewPlan({...newPlan, status: value})
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
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

