FROM node:12.13.1-alpine3.9

LABEL MAINTAINER TANVIR ISLAM
LABEL EMAIL tanvir.fallen@gmail.com
LABEL VERSION 1.0

WORKDIR /opt/app

RUN apk update
RUN npm install mocha nodemon -g
RUN apk add python g++ make && rm -rf /var/cache/apk/*

COPY package.json .
RUN npm install

COPY . .
