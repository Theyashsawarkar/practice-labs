{
  _id: ObjectId,

  orderId: ObjectId,   // → orders._id

  method: "card" | "upi" | "netbanking",
  provider: "stripe" | "razorpay",

  currency: "INR",

  amount: Number,

  status: "paid" | "failed",

  paidAt: ISODate | null,

  createdAt: ISODate
}

