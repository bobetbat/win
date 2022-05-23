FROM node:16.15-alpine
# ARG arch
# FROM --platform=linux/${arch} bounz/hgbe.base

RUN mkdir app
RUN mkdir app/database
RUN mkdir temp

WORKDIR /app

# COPY ["package.json", "package-lock.json*", "/dist/","/database/","/node_modules/"]
COPY . .
# COPY ./database ./database

RUN yarn
RUN yarn build

EXPOSE 5000
# EXPOSE 4040

VOLUME /app/database
VOLUME /temp

ENTRYPOINT [ "/app/node_modules/.bin/nodemon","--exec","node","dist/src/index.js" ]
