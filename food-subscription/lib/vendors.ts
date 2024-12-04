interface Vendor {
  id: string
  name: string
  image: string
  cuisine: string
  rating: number
  description: string
  menu: {
    category: string
    items: {
      name: string
      description: string
      price: number
    }[]
  }[]
}

const vendors: Vendor[] = [
  {
    id: "1",
    name: "The Green Kitchen",
    image: "/placeholder.svg?height=400&width=600",
    cuisine: "Vegetarian",
    rating: 4.8,
    description: "Fresh, organic vegetarian meals prepared with love. Our dishes are crafted to provide a perfect balance of nutrition and flavor, ensuring a delightful dining experience for all our subscribers.",
    menu: [
      {
        category: "Mains",
        items: [
          { name: "Quinoa Buddha Bowl", description: "A nutritious bowl with quinoa, roasted vegetables, and tahini dressing", price: 12.99 },
          { name: "Vegetable Lasagna", description: "Layers of pasta, seasonal vegetables, and rich tomato sauce", price: 14.99 },
          { name: "Mushroom Risotto", description: "Creamy Arborio rice with a medley of wild mushrooms", price: 13.99 },
        ]
      },
      {
        category: "Sides",
        items: [
          { name: "Roasted Sweet Potato Wedges", description: "Crispy on the outside, soft on the inside", price: 5.99 },
          { name: "Kale Caesar Salad", description: "Fresh kale with our homemade vegan Caesar dressing", price: 6.99 },
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Vegan Chocolate Mousse", description: "Rich and creamy chocolate mousse made with avocado", price: 7.99 },
          { name: "Fresh Fruit Parfait", description: "Layers of seasonal fruits with coconut yogurt", price: 6.99 },
        ]
      }
    ]
  },
  // Add more vendors here...
]

export async function getVendorById(id: string): Promise<Vendor | undefined> {
  // In a real application, this would be an API call or database query
  return vendors.find(vendor => vendor.id === id)
}

