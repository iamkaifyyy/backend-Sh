const mongoose = require('mongoose');

// connecting the database 
mongoose.connect('mongodb://127.0.0.1:27017/jamesbond');

// defining the Schema 
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String  
});

// creating model and exporting the model 
module.exports = mongoose.model('user', userSchema);

