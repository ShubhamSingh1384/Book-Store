const Book = require('../models/Book.Model')

const getBook = async (req, res) => {
    try {
        const BookData = await Book.find();
        res.status(200).json(BookData);
    } catch (error) {
        console.log("error : ", error);
        res.status(500).json(error);
    }
}

module.exports =  getBook;