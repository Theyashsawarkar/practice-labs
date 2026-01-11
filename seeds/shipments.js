use ecommerce

db.shipments.deleteMany({})

const orders = db.orders.find({ status: "completed" }).toArray()

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const warehouses = ["BLR-1", "BLR-2"]

let shipments = []

orders.forEach(order => {
  // only orders containing physical items get shipments
  const hasPhysical = order.items.some(i => i.typeSnapshot === "physical")
  if (!hasPhysical) return

  const shippedAt = randomDate(
    order.createdAt,
    new Date(order.createdAt.getTime() + 1000 * 60 * 60 * 24)
  )

  const isDelayed = Math.random() < 0.15 // ~15% delayed
  const deliveredAt = isDelayed
    ? randomDate(
        new Date(shippedAt.getTime() + 1000 * 60 * 60 * 72),
        new Date(shippedAt.getTime() + 1000 * 60 * 60 * 120)
      )
    : randomDate(
        new Date(shippedAt.getTime() + 1000 * 60 * 60 * 24),
        new Date(shippedAt.getTime() + 1000 * 60 * 60 * 72)
      )

  shipments.push({
    orderId: order._id,

    warehouse: random(warehouses),

    shippedAt,
    deliveredAt,

    status: isDelayed ? "delayed" : "delivered",

    createdAt: shippedAt
  })
})

db.shipments.insertMany(shipments)

