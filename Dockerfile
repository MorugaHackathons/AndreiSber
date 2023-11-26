# Stage 1: Build React App
FROM node:14 as react-build
WORKDIR /app
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client/src ./src
COPY client/public ./public
RUN npm run build

# Stage 2: Build FastAPI App
FROM python:3.9 as fastapi-build
WORKDIR /app
COPY api/. ./
RUN pip install --no-cache-dir -r requirements.txt

# Stage 3: Create Final Image
FROM python:3.9
WORKDIR /app

# Copy built React app
COPY --from=react-build /app/build ./client/build

# Copy built FastAPI app
COPY --from=fastapi-build /app ./

# Expose ports
EXPOSE 3000 8000

# Install any additional dependencies if needed
# RUN apt-get update && apt-get install -y ...

# Set environment variables
# ENV ...

# Command to run your applications
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
