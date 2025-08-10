// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/ProductRoutes'); 
const userRoutes=require('./routes/userRoutes')
const contactRoutes=require('./routes/contactRoutes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/contact', contactRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Redclub Wedding Lounge API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
