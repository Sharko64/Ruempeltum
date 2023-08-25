FROM node:lts-alpine

WORKDIR /web-server

RUN apk update && apk add --upgrade apk-tools && apk upgrade --available

COPY package*.json ./

RUN npm i

EXPOSE 3000

COPY . .

CMD ["npm", "start"]
