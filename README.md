# 🧠 MongoDB Aggregation Lab (Production-Grade)

A **production-inspired MongoDB dataset** built to master the **MongoDB Aggregation Framework** — from fundamentals to advanced, interview-grade, real-world analytics.

This is **not tutorial data**.
This lab mirrors how real systems structure, seed, and analyze MongoDB data.

---

## 🎯 Why This Project Exists

This project helps you:

- Master MongoDB aggregations end-to-end
- Practice `$lookup`, `$unwind`, `$group`, `$facet`, `$reduce`
- Understand real data dependencies
- Build confidence for production debugging & interviews
- Work with nested objects, arrays, joins, and time-series data

---

## 🧱 Domain Model (E-commerce Inspired)

### Collections

| Collection  | Description |
|------------|-------------|
| `users`     | Customer profiles |
| `products`  | Physical & digital products |
| `orders`    | Orders with embedded items |
| `payments`  | Payment transactions |
| `refunds`   | Partial & full refunds |
| `shipments` | Logistics for physical orders |

---

## 🔗 Collection Dependencies (Important)

```
users
  ↓
products
  ↓
orders
  ↓
payments
  ↓
refunds
  ↓
shipments
```

MongoDB does not enforce foreign keys,  
but aggregation correctness depends on this order.

---

## 📁 Project Structure

```
.
├── docker-compose.yml
├── setup.sh
├── schemas/
│   ├── user.js
│   ├── product.js
│   ├── order.js
│   ├── payment.js
│   ├── refund.js
│   └── shipment.js
└── seeds/
    ├── users.js
    ├── products.js
    ├── orders.js
    ├── payments.js
    ├── refunds.js
    └── shipments.js
```

---

## 🐳 Requirements

- Docker
- Docker Compose
- Bash / Zsh 

---

## 🚀 One-Command Setup
### ✅ Option 1: Git Clone (Recommended)
```bash
git clone -b feature/mongo-aggrigation https://github.com/Theyashsawarkar/practice-labs.git && cd practice-labs && chmod +x setup.sh && ./setup.sh
```
### ⚡ Option 2: Curl + ZIP (No Git Required)
```bash
curl -L -o practice-labs.zip \
https://github.com/Theyashsawarkar/practice-labs/archive/refs/heads/feature/mongo-aggrigation.zip

unzip practice-labs.zip
cd practice-labs-feature-mongo-aggrigation
chmod +x setup.sh
./setup.sh
```

---

## 🔁 Re-run Anytime

```bash
./setup.sh
```

Each run drops the database and reseeds clean data.

---

## 🏁 Who This Is For

Backend Engineers, Software Engineers, Data Engineers, and anyone serious about MongoDB Aggregations.

Happy aggregating 👑🔥
