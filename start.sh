#!/bin/sh

# Wait for the database to be ready
echo "Waiting for DB to be ready..."
until nc -z db 5432; do
  sleep 1
done
echo "DB is ready."

echo "Generating Prisma Client"
bunx prisma generate

# Run Prisma migrations
echo "Running Prisma migrations..."
bunx prisma migrate deploy

# Start the server
echo "Starting server..."
bun start