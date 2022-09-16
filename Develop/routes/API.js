const express = require('express');

const allNotes = require('./Develop/db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

app.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});