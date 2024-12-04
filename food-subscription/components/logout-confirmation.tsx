"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'

export function LogoutConfirmation() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // Implement actual logout logic here
    console.log("User logged out")
    router.push("/")
  }

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setShowConfirmation(true)}
        className="w-full justify-start"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Log out
      </Button>
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be redirected to the home page after logging out.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Log out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

