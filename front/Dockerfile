FROM node:alpine

WORKDIR /usr/src/front

COPY ./package.json ./
RUN npm install && npm cache clean --force
COPY . .

CMD ["npm", "start"]