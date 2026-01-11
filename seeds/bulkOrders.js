use ecommerce

db.orders.deleteMany({}) // reset for clean slate

const countries = ["IN", "US", "DE", "UK"]
const signupSources = ["mobile", "web", "referral"]
const categories = ["electronics", "education", "books", "accessories"]

const products = [
  { name: "Mechanical Keyboard", category: "electronics", price: 3500, type: "physical" },
  { name: "Noise Cancelling Headphones", category: "electronics", price: 6000, type: "physical" },
  { name: "Pro Coding Course", category: "education", price: 1500, type: "digital" },
  { name: "System Design Ebook", category: "books", price: 800, type: "digital" },
  { name: "Laptop Stand", category: "accessories", price: 1200, type: "physical" }
]

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

let bulk = []

for (let i = 1; i <= 50; i++) {
  const itemsCount = Math.ceil(Math.random() * 3)
  let items = []
  let subtotal = 0

  for (let j = 0; j < itemsCount; j++) {
    const product = random(products)
    const quantity = Math.ceil(Math.random() * 2)

    subtotal += product.price * quantity

    items.push({
      productId: ObjectId(),
      name: product.name,
      category: product.category,
      price: product.price,
      quantity,
      tags: [product.category, product.type],
      fulfillment:
        product.type === "physical"
          ? {
              type: "physical",
              warehouse: "BLR-1",
              shippedAt: randomDate(new Date("2024-01-01"), new Date("2024-02-15"))
            }
          : {
              type: "digital",
              accessGrantedAt: randomDate(new Date("2024-01-01"), new Date("2024-02-15"))
            }
    })
  }

  const tax = Math.round(subtotal * 0.18)
  const discount = Math.random() > 0.7 ? 500 : 0
  const total = subtotal + tax - discount

  const hasRefund = Math.random() > 0.65

  bulk.push({
    orderNumber: `ORD-2024-${String(i).padStart(4, "0")}`,
    user: {
      userId: ObjectId(),
      email: `user${i}@example.com`,
      country: random(countries),
      isPrime: Math.random() > 0.5,
      signupSource: random(signupSources)
    },
    status: hasRefund ? "refunded" : "completed",
    payment: {
      method: "card",
      provider: "stripe",
      currency: "INR",
      subtotal,
      tax,
      discount: discount ? { code: "AUTO", amount: discount } : null,
      total,
      paidAt: randomDate(new Date("2024-01-01"), new Date("2024-02-15"))
    },
    items,
    refunds: hasRefund
      ? [
          {
            refundId: `RF-${i}`,
            amount: Math.round(total * (0.2 + Math.random() * 0.4)),
            reason: "Customer request",
            refundedAt: randomDate(new Date("2024-01-10"), new Date("2024-02-20"))
          }
        ]
      : [],
    shipping: {
      address: {
        city: "Bangalore",
        state: "KA",
        pincode: "560001"
      },
      deliveredAt: randomDate(new Date("2024-01-05"), new Date("2024-02-20"))
    },
    createdAt: randomDate(new Date("2024-01-01"), new Date("2024-02-15")),
    updatedAt: new Date()
  })
}

db.orders.insertMany(bulk)

