FROM node:wheezy

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g webpack

RUN npm build

# Bundle app source
COPY . /usr/src/app
RUN webpack --progress --config webpack.config.prod.js

EXPOSE 3001
CMD npm run-script start-production