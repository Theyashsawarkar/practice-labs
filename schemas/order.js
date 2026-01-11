{
  _id: ObjectId,

  orderNumber: String,

  userId: ObjectId,          // → users._id

  status: "completed" | "cancelled",

  items: [
    {
      productId: ObjectId,   // → products._id
      quantity: Number,
      priceSnapshot: Number,
      typeSnapshot: "physical" | "digital"
    }
  ],

  pricing: {
    subtotal: Number,
    tax: Number,
    discount: Number,
    total: Number
  },

  createdAt: ISODate,
  updatedAt: ISODate
}

