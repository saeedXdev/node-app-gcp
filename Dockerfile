FROM node:18-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]