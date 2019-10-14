FROM node:10 as base

ENV SERVER_PORT 3000 
EXPOSE $SERVER_PORT

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json* ./ 

RUN npm install && npm cache clean --force

COPY . .

FROM base as dev

CMD ["npm", "run", "dev"]


#Not working .next folder not found
FROM base as server

RUN npm run build 

CMD [ "npm","run","start" ]