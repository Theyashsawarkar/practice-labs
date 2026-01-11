use ecommerce

db.payments.deleteMany({})

const orders = db.orders.find().toArray()

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const methods = ["card", "upi", "netbanking"]
const providers = ["stripe", "razorpay"]

let payments = []

orders.forEach(order => {
  if (order.status !== "completed") return

  const isSuccess = Math.random() > 0.08 // ~92% success
  const createdAt = order.createdAt
  const paidAt = isSuccess
    ? randomDate(createdAt, new Date(createdAt.getTime() + 1000 * 60 * 60 * 2))
    : null

  payments.push({
    orderId: order._id,

    method: random(methods),
    provider: random(providers),

    currency: "INR",

    amount: order.pricing.total,

    status: isSuccess ? "paid" : "failed",

    paidAt,

    createdAt
  })
})

db.payments.insertMany(payments)

