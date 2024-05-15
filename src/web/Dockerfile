# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) from the web directory
# Assuming the Docker build context is the root directory
COPY yarn.lock ./
COPY package.json ./

# Install dependencies
# RUN yarn add next
RUN yarn install 

# Copy the rest of the application code to the working directory
# This assumes that your Docker build context includes the web directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["yarn", "dev"]
