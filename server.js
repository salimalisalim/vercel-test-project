const express = require('express');
const app = express();

// Define a simple route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Define a route for a user profile page with a dynamic parameter for the user ID
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Welcome to user profile page for user ${id}`);
});

// Define a route for a contact page
app.get('/contact', (req, res) => {
  res.send('Welcome to the contact page!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
