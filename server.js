// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the transportation page (transportation.html)
app.get('/transportation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'transportation.html'));
});

// Route for the about page (about.html)
app.get('/add-resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-resources.html'));
});

// Route for the about page (about.html)
app.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resources.html'));
});

// Route for the about page (about.html)
app.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-in.html'));
});

// Route for the about page (about.html)
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Route for the contact page (contact.html)
app.get('/housing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'housing.html'));
});

// API route to provide dynamic data for transportation (Optional)
app.get('/api/transportation-data', (req, res) => {
  const sampleData = {
    buses: [
      { id: 1, route: 'A', status: 'On Time' },
      { id: 2, route: 'B', status: 'Delayed' },
    ],
  };
  res.json(sampleData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

