FROM node:16.15-bullseye

WORKDIR /app
ADD . /app

ENV API_URL=http://localhost:5001
ENV CLIENT_URL=http://localhost:3000
ENV APP_PORT=5001
ENV APP_ACCESS_TOKEN_KEY=asd
ENV APP_REFRESH_TOKEN_KEY=asd1

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "yarn","dev" ]
