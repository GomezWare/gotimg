FROM node:22

WORKDIR /usr/src/app

COPY ./*.json ./
COPY ./src ./src
COPY ./public ./public
COPY ./*.mjs ./

ENV NODE_ENV prod

RUN npm update -g
RUN npm i
RUN npm run build


EXPOSE 80

ENV HOST="0.0.0.0"
CMD [ "node", "./dist/server/entry.mjs"]