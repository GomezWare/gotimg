FROM node:22 AS build-stage

WORKDIR /app

RUN apt-get update && apt-get install -y \
  libcairo2-dev \
  libjpeg-dev \
  libpango1.0-dev \
  libgif-dev \
  librsvg2-dev \
  && rm -rf /var/lib/apt/lists/*

COPY . /app

RUN npm install

RUN npm run build

FROM node:22 AS production-stage

WORKDIR /app

COPY --from=build-stage /app/dist /app/dist
COPY --from=build-stage /app/package*.json /app/

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "run", "server"]