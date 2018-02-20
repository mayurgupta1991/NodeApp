console.log('asdas');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username}!`)
console.log('Result:', notes.add(9, -2));
