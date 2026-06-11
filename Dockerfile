# docker build -t geometrics .
# docker run -p 5173:5173 geometrics

FROM node:25-alpine

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]