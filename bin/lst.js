#!/usr/bin/env node
'use strict';
var program = require('commander');
var chalk = require('chalk');
var path = require('path');

function coerceLevel (n) {
  n = parseInt(n, 10);
  return n > 0 ? n : 1;
}

program
  .version('1.0.0')
  .description('Recursively print a pretty directory tree')
  .option('-m, --node_modules', 'recurse through node_modules')
  .option('-l, --level <n>', 'recurse <n> levels deep', coerceLevel)
  .arguments('[dir]')
  .action(function (dir) {
     program.dir = path.resolve(dir);
  })
  .parse(process.argv);

program.dir = program.dir || path.resolve(process.cwd());
