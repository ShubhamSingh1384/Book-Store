const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book.Model')
const cors = require('cors')

const bookRoute = require('./route/book.route')
const userRoute = require('./route/user.route')

dotenv.config();

// const PORT = process.env.PORT;
const PORT = 4000;
// console.log(PORT);
const URI = process.env.MONGO_URI;

// console.log(URI);
const app = express();

app.use(cors());


const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error " , error );
  }
}
connectDB();


// defining routes
app.use(express.json());
app.use("/book", bookRoute);
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})