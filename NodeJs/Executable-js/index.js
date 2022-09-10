#!/usr/bin/env node
import chalk from 'chalk';
// const dependency = require('./dependency.js');
import dependency from './dependency.js';
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.blue.bold('1.') + 'parse something');

rl.question('Enter your number option: ', function (option) {
    console.log('Your options is ' + chalk.blue.bold(option));

    rl.close();
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});