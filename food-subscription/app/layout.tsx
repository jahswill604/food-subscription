import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ChatSupport } from '@/components/chat-support'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FoodSub',
  description: 'Your favorite food, delivered monthly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatSupport />
      </body>
    </html>
  )
}

