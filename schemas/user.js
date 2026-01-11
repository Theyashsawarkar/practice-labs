{
  _id: ObjectId,

  email: String,

  profile: {
    name: String,
    country: String,
    city: String
  },

  flags: {
    isPrime: Boolean,
    isActive: Boolean
  },

  signup: {
    source: "mobile" | "web" | "referral",
    campaign: String | null,
    signedUpAt: ISODate
  },

  lastLoginAt: ISODate,

  createdAt: ISODate,
  updatedAt: ISODate
}

