use ecommerce

db.products.deleteMany({})

const now = new Date()

db.products.insertMany([
  // 🔌 ELECTRONICS (PHYSICAL)
  {
    name: "Mechanical Keyboard",
    category: "electronics",
    type: "physical",
    price: { amount: 3500, currency: "INR" },
    tags: ["keyboard", "gaming", "peripheral"],
    inventory: {
      sku: "ELEC-KB-001",
      stock: 120,
      warehouse: "BLR-1"
    },
    isActive: true,
    createdAt: now,
    updatedAt: now
  },
  {
    name: "Noise Cancelling Headphones",
    category: "electronics",
    type: "physical",
    price: { amount: 6000, currency: "INR" },
    tags: ["audio", "premium"],
    inventory: {
      sku: "ELEC-HD-002",
      stock: 80,
      warehouse: "BLR-1"
    },
    isActive: true,
    createdAt: now,
    updatedAt: now
  },

  // 📚 EDUCATION (DIGITAL)
  {
    name: "Pro Coding Course",
    category: "education",
    type: "digital",
    price: { amount: 1500, currency: "INR" },
    tags: ["coding", "career", "digital"],
    inventory: null,
    isActive: true,
    createdAt: now,
    updatedAt: now
  },
  {
    name: "System Design Masterclass",
    category: "education",
    type: "digital",
    price: { amount: 2500, currency: "INR" },
    tags: ["architecture", "backend", "scaling"],
    inventory: null,
    isActive: true,
    createdAt: now,
    updatedAt: now
  },

  // 📖 BOOKS (DIGITAL)
  {
    name: "Backend Engineering Ebook",
    category: "books",
    type: "digital",
    price: { amount: 800, currency: "INR" },
    tags: ["ebook", "backend", "nodejs"],
    inventory: null,
    isActive: true,
    createdAt: now,
    updatedAt: now
  },

  // 🧩 ACCESSORIES (PHYSICAL)
  {
    name: "Laptop Stand",
    category: "accessories",
    type: "physical",
    price: { amount: 1200, currency: "INR" },
    tags: ["ergonomics", "office"],
    inventory: {
      sku: "ACC-LS-003",
      stock: 150,
      warehouse: "BLR-2"
    },
    isActive: true,
    createdAt: now,
    updatedAt: now
  },
  {
    name: "Wireless Mouse",
    category: "accessories",
    type: "physical",
    price: { amount: 900, currency: "INR" },
    tags: ["mouse", "wireless"],
    inventory: {
      sku: "ACC-MS-004",
      stock: 200,
      warehouse: "BLR-2"
    },
    isActive: true,
    createdAt: now,
    updatedAt: now
  }
])

