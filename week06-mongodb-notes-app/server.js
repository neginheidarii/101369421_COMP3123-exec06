const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoute = require('./routes/NoteRoutes')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', noteRoute)

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
const DB_URL ="mongodb+srv://neginDb:Nhd6710@cluster0.tgc1gdl.mongodb.net/comp3123Db?retryWrites=true&w=majority";
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 3000");
});