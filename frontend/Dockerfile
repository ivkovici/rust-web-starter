FROM node:14.5.0-alpine3.10

WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

ENTRYPOINT ["npm", "run", "start:staging"]