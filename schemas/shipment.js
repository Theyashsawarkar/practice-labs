{
  _id: ObjectId,

  orderId: ObjectId,     // → orders._id

  warehouse: String,

  shippedAt: ISODate,
  deliveredAt: ISODate | null,

  status: "shipped" | "delivered" | "delayed",

  createdAt: ISODate
}

