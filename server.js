const express = require('express');
const app = express();
const PORT = 5000; // or any other port number you prefer

// Define API routes or middleware here
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
// by default in "http://localhost:5000/api/hello"

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
