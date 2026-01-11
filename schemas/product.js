{
  _id: ObjectId,

  name: String,

  category: String,        // electronics | education | books | accessories
  type: String,            // physical | digital

  price: {
    amount: Number,
    currency: "INR"
  },

  tags: [String],

  inventory: {
    sku: String,
    stock: Number,
    warehouse: String
  } | null,

  isActive: Boolean,

  createdAt: ISODate,
  updatedAt: ISODate
}

