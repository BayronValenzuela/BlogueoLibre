FROM node:14.15.1-alpine3.11
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@4.0.1 -g
RUN npm install axios@0.21.0 
COPY . ./
EXPOSE 3000
