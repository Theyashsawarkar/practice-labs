use ecommerce

db.orders.deleteMany({})

const users = db.users.find().toArray()
const products = db.products.find().toArray()

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

let orders = []

for (let i = 1; i <= 60; i++) {
  const user = random(users)
  const itemsCount = Math.ceil(Math.random() * 3)

  let items = []
  let subtotal = 0

  for (let j = 0; j < itemsCount; j++) {
    const product = random(products)
    const quantity = Math.ceil(Math.random() * 2)

    subtotal += product.price.amount * quantity

    items.push({
      productId: product._id,
      quantity,
      priceSnapshot: product.price.amount,
      typeSnapshot: product.type
    })
  }

  const tax = Math.round(subtotal * 0.18)
  const discount = Math.random() > 0.7 ? 500 : 0
  const total = subtotal + tax - discount

  const createdAt = randomDate(
    user.signup.signedUpAt,
    new Date("2024-02-20")
  )

  orders.push({
    orderNumber: `ORD-2024-${String(i).padStart(5, "0")}`,
    userId: user._id,
    status: Math.random() > 0.1 ? "completed" : "cancelled",
    items,
    pricing: {
      subtotal,
      tax,
      discount,
      total
    },
    createdAt,
    updatedAt: createdAt
  })
}

db.orders.insertMany(orders)

