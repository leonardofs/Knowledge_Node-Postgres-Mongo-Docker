FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .

COPY .env .
EXPOSE 3000

CMD  ["npm", "start"]