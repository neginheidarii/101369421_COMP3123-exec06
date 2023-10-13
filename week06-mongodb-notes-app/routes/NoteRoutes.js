const noteModel = require("../models/NotesModel.js");
const server = require("../server");
const express = require("express");

const noteRoute = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoute.post("/notes", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to save the note
  try {
    // ...req.body
    const newNote = new noteModel(JSON.parse(req.body.content));
    const savedNote = await newNote.save();
  } catch (error) {
    res.status(500).send(error);
  }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoute.get("/notes", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to returns all note
  try {
    const noteList = await noteModel.find({});
    res.status(200).send(noteList);
  } catch (error) {
    res.status(500).send(error);
  }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoute.get("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to return onlt one note using noteid
  try {
    const getNote = await noteModel.getNote({ _id: req.params.noteId });
    res.status(200).send(getNote);
  } catch (error) {
    res.status(500).send(error);
  }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoute.put("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to update the note using noteid
  try {
    const updateNote = await noteModel.updateNote({
      _id: req.params.noteId,
      content: req.body.content,
    });
    res.status(200).send(updateNote);
  } catch(error){
    
  }

});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoute.delete("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to delete the note using noteid
  try {
    const deleteNote = await noteModel.deleteNote({ _id: req.params.noteId });
    res.status(200).send(deleteNote);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = noteRoute;
