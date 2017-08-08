FROM mhart/alpine-node:8

ENV PROJECT_HOME /opt/app

WORKDIR $PROJECT_HOME

COPY package.json $PROJECT_HOME

RUN npm install

COPY . $PROJECT_HOME

RUN npm run build

ENTRYPOINT ./bin/cli.js do-stuff
