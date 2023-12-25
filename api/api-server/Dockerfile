FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

ENV DB_HOST=postgres

RUN npm run build

EXPOSE 5005

CMD [ "node", "./dist/server.js" ]