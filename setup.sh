#!/usr/bin/env bash
set -e

echo "🚀 MongoDB Aggregation Lab — Full Reset & Seed"

# 1️⃣ Start Docker containers
echo "🐳 Starting Docker containers..."
docker compose up -d

# 2️⃣ Wait for MongoDB
echo "⏳ Waiting for MongoDB to be ready..."
sleep 5

# 3️⃣ Drop database if exists
echo "🧨 Dropping existing database (if any)..."
docker exec -it mongo-agg mongosh --quiet <<EOF
use ecommerce
db.dropDatabase()
print("💥 Database dropped successfully")
EOF

# 4️⃣ Seed collections in dependency order
echo ""
echo "👤 Seeding users collection..."
docker exec -i mongo-agg mongosh < seeds/users.js

echo "📦 Seeding products collection..."
docker exec -i mongo-agg mongosh < seeds/products.js

echo "🛒 Seeding orders collection..."
docker exec -i mongo-agg mongosh < seeds/orders.js

echo "💳 Seeding payments collection..."
docker exec -i mongo-agg mongosh < seeds/payments.js

echo "↩️  Seeding refunds collection..."
docker exec -i mongo-agg mongosh < seeds/refunds.js

echo "🚚 Seeding shipments collection..."
docker exec -i mongo-agg mongosh < seeds/shipments.js

# 5️⃣ Final verification
echo ""
echo "🔍 Final collection counts:"
docker exec -it mongo-agg mongosh --quiet <<EOF
use ecommerce
print("👤 users:", db.users.countDocuments())
print("📦 products:", db.products.countDocuments())
print("🛒 orders:", db.orders.countDocuments())
print("💳 payments:", db.payments.countDocuments())
print("↩️  refunds:", db.refunds.countDocuments())
print("🚚 shipments:", db.shipments.countDocuments())
EOF

echo ""
echo "🏁 Setup complete — clean data, fresh world, ready to aggregate 👑🔥"
