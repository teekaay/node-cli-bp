# Node CLI template

Boilerplate for CLI apps with Node.js.

## Getting started

To get started, run

  git clone ...
  cd <path to project>
  yarn/npm install
  npm run build // Executes all Grunt tasks

The main app can be found in `bin/cli.js`.

## Batteries included

In this template, the following comes for free:

* CLI package (`commander`) with an example subcommand (`bin/cli.js` ->
  doStuff)
* Logging with `winston`
* Grunt with `eslint`, `ava`, `nsp`, code coverage and build pipeline steps
* Validation of commit messages
* Docker and docker-compose setup
* Editorconfig setup
* Sample unit test with `ava` in `lib/example.spec.js`

To execute the pipeline run `npm run build`.
