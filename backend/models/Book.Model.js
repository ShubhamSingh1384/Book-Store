const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    category: String,
    image: String,
    price: Number
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book
