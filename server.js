// Required dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

// Express app setup
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/registration_details', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' }
});

// Hash password before saving user
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Create User model based on schema
const User = mongoose.model('User', userSchema);

// Route to handle user registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send(err); // Handle server error
  }
});

// Route to handle user login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    res.status(200).send({ message: 'Login successful', user });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).send(err); // Handle server error
  }
});

// Define book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category:String,
  description: String,
  bookImageUrl: String,
  paid: Boolean,
  price: Number,
  languages: [String]
});

// Create Book model based on schema
const Book = mongoose.model('Book', bookSchema);

// Route to handle adding a book
app.post('/api/addBook', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).send({ message: 'Successfully submitted', book: savedBook });
  } catch (err) {
    console.error('Error adding book:', err);
    res.status(500).send(err); // Handle server error
  }
});

// Update the endpoint URLs in your backend
app.get('/api/books', async (req, res) => { // Changed from /api/addBooks to /api/books
  try {
    const category = req.query.category;
    const books = await Book.find({ category });
    res.status(200).send(books);
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).send(err); // Handle server error
  }
});

app.delete('/api/books/:id', async (req, res) => { // Changed from /api/addBooks/:id to /api/books/:id
  try {
    const bookId = req.params.id;
    await Book.findByIdAndDelete(bookId);
    res.status(200).send({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error('Error deleting book:', err);
    res.status(500).send(err); // Handle server error
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
