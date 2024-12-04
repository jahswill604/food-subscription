import { Navigation } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4">
                We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <p>123 Food Street, Tasty City, FL 12345</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <p>info@foodsub.com</p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monday - Friday: 9am - 5pm EST</p>
                  <p>Saturday: 10am - 2pm EST</p>
                  <p>Sunday: Closed</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <section className="mt-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does FoodSub work?</AccordionTrigger>
                <AccordionContent>
                  FoodSub is a food subscription service that connects you with local restaurants. You choose a subscription plan, select your preferred meals, and we deliver fresh, delicious food to your doorstep on your schedule.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize my meal plan?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can customize your meal plan based on your dietary preferences, allergies, and favorite cuisines. Our platform allows you to choose from a wide variety of restaurants and dishes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What if I need to pause or cancel my subscription?</AccordionTrigger>
                <AccordionContent>
                  You can easily pause or cancel your subscription at any time through your account settings. There are no long-term commitments, and you have full control over your subscription.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you ensure food quality and safety?</AccordionTrigger>
                <AccordionContent>
                  We partner only with reputable, health-inspected restaurants. All our delivery partners follow strict food safety guidelines, and meals are delivered in insulated containers to ensure freshness.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

