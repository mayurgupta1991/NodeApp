const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


const addNote = (title, body) => {
    const notes = fetchNotes();
    const note = { title, body };
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (!duplicateNotes.length) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
};

const getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};


const removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
};