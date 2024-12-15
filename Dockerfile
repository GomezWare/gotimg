FROM node:18 AS build-stage

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM node:18-slim AS production-stage

WORKDIR /app

COPY --from=build-stage /app/dist /app/dist
COPY --from=build-stage /app/package*.json /app/

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "run", "server"]
