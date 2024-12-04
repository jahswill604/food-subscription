"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Metadata } from "next"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { MenuTable } from "@/components/dashboard/vendor/menu-table"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function MenuManagementPage() {
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false)
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '' })
  const router = useRouter()

  const handleAddNewItem = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your API to add the new item
    // For now, we'll just simulate an API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // After successfully adding the item, close the modal and refresh the page
    setIsNewItemModalOpen(false)
    setNewItem({ name: '', description: '', price: '' })
    router.refresh()
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Menu Management"
        text="Add, edit, or remove items from your menu."
      >
        <Button onClick={() => setIsNewItemModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </DashboardHeader>
      <MenuTable />

      <Dialog open={isNewItemModalOpen} onOpenChange={setIsNewItemModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Menu Item</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddNewItem}>
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
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
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
              <Button type="submit">Add Item</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}

