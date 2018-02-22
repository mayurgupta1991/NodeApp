console.log('asdas');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

/*var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username}!`)*/
//console.log('Result:', notes.add(9, -2));
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});


console.log(process.argv);


console.log('argv value', argv);

