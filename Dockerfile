FROM node:16.17.0-alpine

ENV SERVER_PORT=${SERVER_PORT}

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . . 

RUN npm run build

EXPOSE ${SERVER_PORT}

CMD ["node", "dist/main"]
