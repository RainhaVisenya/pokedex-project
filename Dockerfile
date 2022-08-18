FROM node:latest as angular
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "npm-shrinkwrap.json*", "./"]
RUN yarn install --silent
COPY . .
RUN yarn build
