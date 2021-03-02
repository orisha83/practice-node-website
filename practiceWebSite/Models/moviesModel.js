const mongoose = require('mongoose')

let moviesSchema = new mongoose.Schema({
    name : String,
    language : String
})

module.exports = mongoose.model('movies',moviesSchema)