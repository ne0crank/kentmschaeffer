/* Import mongoose */
const mongoose = require('mongoose');
/* Connect to database */
const mongoURI = "mongodb://localhost:27017";
mongoose.connect(mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
/* Export the active connection */
module.exports = { mongoose }
