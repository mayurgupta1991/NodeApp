const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
const notes = require('./notes.js');

const command = argv._[0];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}


//node App.js add --title mayur --body='main file'

