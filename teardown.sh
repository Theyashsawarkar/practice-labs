
#!/bin/sh

LAB_CONTAINERS="mongo-agg mongo-express"
LAB_DIR_NAME="practice-labs"

echo "🧹 MongoDB Aggregation Lab Teardown"
echo "----------------------------------"

printf "👉 Stop running containers? (y/n): "
read STOP_CONTAINERS
if [ "$STOP_CONTAINERS" = "y" ]; then
  for container in $LAB_CONTAINERS; do
    if docker ps -q -f name="$container" >/dev/null 2>&1; then
      echo "⏹️  Stopping $container..."
      docker stop "$container" >/dev/null 2>&1 || true
    fi
  done
fi

echo ""

printf "👉 Remove containers? (y/n): "
read REMOVE_CONTAINERS
if [ "$REMOVE_CONTAINERS" = "y" ]; then
  for container in $LAB_CONTAINERS; do
    if docker ps -a -q -f name="$container" >/dev/null 2>&1; then
      echo "🗑️  Removing $container..."
      docker rm "$container" >/dev/null 2>&1 || true
    fi
  done
fi

echo ""

printf "👉 Remove Docker volumes created by this lab? (y/n): "
read REMOVE_VOLUMES
if [ "$REMOVE_VOLUMES" = "y" ]; then
  echo "🧽 Removing unused Docker volumes..."
  docker volume prune -f
fi

echo ""
echo "✅ Teardown complete. Lab cleanup finished."
