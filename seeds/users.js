use ecommerce

db.users.deleteMany({})

const countries = [
  { country: "IN", cities: ["Bangalore", "Delhi", "Mumbai"] },
  { country: "US", cities: ["San Francisco", "New York"] },
  { country: "DE", cities: ["Berlin", "Munich"] },
  { country: "UK", cities: ["London", "Manchester"] }
]

const signupSources = ["mobile", "web", "referral"]
const campaigns = ["NEWYEAR24", "REFERRAL_BONUS", "WINTER_SALE"]

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

let users = []

for (let i = 1; i <= 40; i++) {
  const geo = random(countries)
  const signedUpAt = randomDate(
    new Date("2023-11-15"),
    new Date("2024-02-10")
  )

  const isPrime = Math.random() > 0.55

  users.push({
    email: `user${i}@example.com`,

    profile: {
      name: `User ${i}`,
      country: geo.country,
      city: random(geo.cities)
    },

    flags: {
      isPrime,
      isActive: Math.random() > 0.05
    },

    signup: {
      source: random(signupSources),
      campaign: Math.random() > 0.6 ? random(campaigns) : null,
      signedUpAt
    },

    lastLoginAt: randomDate(signedUpAt, new Date("2024-02-20")),

    createdAt: signedUpAt,
    updatedAt: new Date()
  })
}

db.users.insertMany(users)

