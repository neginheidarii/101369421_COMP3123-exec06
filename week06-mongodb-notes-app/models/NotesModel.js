const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated


const noteSchema =  new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: String,
    priority:{
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM']
        
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
        
    }

})
// Create a Note model from the schema and export it 
module.exports= mongoose.model("note", noteSchema)