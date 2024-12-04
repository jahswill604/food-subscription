"use client"

import { useState } from "react"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function VendorSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [dietaryPreference, setDietaryPreference] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchTerm, cuisine, dietaryPreference)
  }

  return (
    <section id="vendor-search" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Vendor</h2>
      <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input
              type="text"
              placeholder="Search vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={cuisine} onValueChange={setCuisine}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Cuisine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="italian">Italian</SelectItem>
              <SelectItem value="japanese">Japanese</SelectItem>
              <SelectItem value="mexican">Mexican</SelectItem>
              <SelectItem value="indian">Indian</SelectItem>
              <SelectItem value="american">American</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dietaryPreference} onValueChange={setDietaryPreference}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Dietary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="gluten-free">Gluten-free</SelectItem>
              <SelectItem value="keto">Keto</SelectItem>
              <SelectItem value="paleo">Paleo</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full md:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </form>
    </section>
  )
}

