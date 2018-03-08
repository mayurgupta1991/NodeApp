const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
const notes = require('./notes.js');

const command = argv._[0];

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var message = notes.removeNote(argv.title) ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}



//node App.js add --title mayur --body='main file'

