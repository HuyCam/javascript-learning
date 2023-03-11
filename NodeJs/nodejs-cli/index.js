#! /usr/bin/env node

// import { program } from 'commander'
// import conf from 'conf'
import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


// const chalk = require('chalk')
// const args = require('yargs').argv;
const argv = yargs(hideBin(process.argv)).argv;
console.log(argv)
console.log('Name: ' + argv.name);
console.log('Age: ' + argv.age);
