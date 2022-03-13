FROM node:17-alpine

RUN mkdir -p /app

ENV NODE_ENV=development
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .

CMD ["yarn", "dev", "--https"]
