const express = require('express');
const app = express();
const port = 5000; // Port for backend

// API endpoint
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
