FROM node:10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# Bundle app source
ADD package.json /usr/src/app/package.json

# Install app dependencies
RUN npm config set registry http://registry.npmjs.org/
RUN npm install --no-optional --production

# Bundle app source
ADD . /usr/src/app

EXPOSE 3000
CMD rm -f /usr/src/app/newrelic.js; cp /usr/src/app/newrelic.js.$APP_ENV /usr/src/app/newrelic.js; npm run start-$APP_ENV