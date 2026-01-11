{
  _id: ObjectId,

  orderId: ObjectId,     // → orders._id
  paymentId: ObjectId,   // → payments._id

  amount: Number,

  reason: String,

  refundedAt: ISODate,

  createdAt: ISODate
}

