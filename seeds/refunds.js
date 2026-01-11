use ecommerce

db.refunds.deleteMany({})

const payments = db.payments.find({ status: "paid" }).toArray()

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const reasons = [
  "Customer request",
  "Product not needed",
  "Found a better alternative",
  "Delayed delivery",
  "Accidental purchase"
]

let refunds = []

payments.forEach(payment => {
  // ~25% of paid payments get refunded
  if (Math.random() > 0.25) return

  const refundedAmount = Math.round(
    payment.amount * (0.2 + Math.random() * 0.4)
  )

  const refundedAt = randomDate(
    payment.paidAt,
    new Date(payment.paidAt.getTime() + 1000 * 60 * 60 * 72)
  )

  refunds.push({
    orderId: payment.orderId,
    paymentId: payment._id,

    amount: refundedAmount,

    reason: random(reasons),

    refundedAt,
    createdAt: refundedAt
  })
})

db.refunds.insertMany(refunds)

