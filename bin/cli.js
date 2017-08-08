#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package');
const commands = require('../lib');

program.version(pkg.version);

program
  .command('do-stuff')
  .description('Do stuff')
  .action(commands.doStuff);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}


