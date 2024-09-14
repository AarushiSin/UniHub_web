// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'material-kit-master/material-kit-master/pages')));


// Route for the homepage (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'material-kit-master/material-kit-master/pages', 'home.html'));
});

// Route for the transportation page (transportation.html)
app.get('/transportation', (req, res) => {
  res.sendFile(path.join(__dirname, 'material-kit-master/material-kit-master/pages', 'transportation.html'));
});

// Route for the about page (about.html)
app.get('/add-resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'material-kit-master/material-kit-master/pages', 'add-resources.html'));
});

// Route for the about page (about.html)
app.get('/resources', (req, res) => {
  res.sendFile(path.join(__dirname, 'material-kit-master/material-kit-master/pages', 'resources.html'));
});

// Route for the about page (about.html)
app.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'material-kit-master/material-kit-master/pages', 'sign-in.html'));
});


// Route for the contact page (contact.html)
app.get('/housing', (req, res) => {
  res.sendFile(path.join(__dirname, 'material-kit-master/material-kit-master/pages', 'housing.html'));
});

// Route for the contact page (contact.html)
app.get('/wellness', (req, res) => {
  res.sendFile(path.join(__dirname, 'material-kit-master/material-kit-master/pages', 'wellness.html'));
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

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'material-kit-master/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'material-kit-master')));

// Routes for rendering pages with EJS (which can include the navbar)
app.get('/', (req, res) => {
  res.render('home'); // Renders 'home.ejs', which can include the navbar
});

app.get('/transportation', (req, res) => {
  res.render('transportation');
});
