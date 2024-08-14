FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]

FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y docker.io
USER jenkins
