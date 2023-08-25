# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the Docker container
WORKDIR /apps

# Copy package.json and package-lock.json to the Docker container
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application to the Docker container
COPY . .

# Start the application
CMD [ "npm", "start" ]
