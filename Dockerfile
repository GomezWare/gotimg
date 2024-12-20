FROM node:22

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

EXPOSE 3000

CMD ["npm", "run", "server"]
