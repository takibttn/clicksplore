const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    service: 'clicksplore-client',
    timestamp: new Date().toISOString()
  });
});

// Serve test3.html as main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test3.html'));
});

// Serve any other .html files
app.get('/:page.html', (req, res) => {
  res.sendFile(path.join(__dirname, `${req.params.page}.html`), (err) => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

// Fallback: serve test3.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'test3.html'));
});

app.listen(PORT, () => {
  console.log(`Client running on http://localhost:${PORT}`);
});
