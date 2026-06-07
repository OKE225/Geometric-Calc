# docker build -t geometrics .

FROM node:25-alpine

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]