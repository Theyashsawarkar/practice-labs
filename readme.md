# 🧠 MongoDB Aggregation Lab (Production-Grade)

A **production-inspired MongoDB dataset** built to master the **MongoDB Aggregation Framework** — from fundamentals to advanced, interview-grade, real-world analytics.

This is **not tutorial data**.
This lab mirrors how real systems structure, seed, and analyze MongoDB data.

---

## 🎯 Why This Project Exists

This project helps you:

- Master MongoDB aggregations end-to-end
- Practice `$lookup`, `$unwind`, `$group`, `$facet`, `$reduce`
- Understand **real data dependencies**
- Build confidence for **production debugging & interviews**
- Work with **nested objects, arrays, joins, and time-series data**

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

Seeding order matters due to logical dependencies:


