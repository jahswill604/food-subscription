"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">FoodSub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/vendors"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Vendors
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2 ml-4">
          <Button variant="ghost" asChild className="text-foreground hover:text-primary hover:bg-primary/10">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="px-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/vendors"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Vendors
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="ghost" asChild onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary hover:bg-primary/10">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild onClick={() => setIsOpen(false)} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

