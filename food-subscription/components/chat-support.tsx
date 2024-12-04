"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X, User, Bot } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'support'
}

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: 'support' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => setIsOpen(!isOpen)

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user'
      }
      setMessages([...messages, newMessage])
      setInputMessage('')

      // Simulate a response from support
      setTimeout(() => {
        const supportResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your message. A support representative will be with you shortly.",
          sender: 'support'
        }
        setMessages(prevMessages => [...prevMessages, supportResponse])
      }, 1000)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 sm:w-96 h-[32rem] flex flex-col shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary text-primary-foreground">
            <CardTitle className="text-lg font-semibold">Chat Support</CardTitle>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-primary-foreground hover:text-primary-foreground/80">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow p-4 bg-background">
            <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className={`flex items-end space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {message.sender === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                    </div>
                    <div
                      className={`max-w-[75%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 bg-muted">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow bg-background border-primary/50 focus:border-primary"
              />
              <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button onClick={toggleChat} size="icon" className="rounded-full h-14 w-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat support</span>
        </Button>
      )}
    </div>
  )
}

