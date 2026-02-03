const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/config.js', (req, res) => {
  const config = {
    SUPABASE_URL: process.env.SUPABASE_URL || null,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || null,
    API_BASE: process.env.API_BASE || null,
    NODE_ENV: process.env.NODE_ENV || null
  };

  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.send(`window.__APP_CONFIG__ = ${JSON.stringify(config)};`);
});

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

// POST /api/chargily/create-checkout - Create Chargily checkout session (server-side)
app.post('/api/chargily/create-checkout', async (req, res) => {
  try {
    const secretKey = process.env.CHARGILY_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ error: 'Missing CHARGILY_SECRET_KEY' });
    }

    const { amount, currency, success_url, failure_url, metadata } = req.body || {};
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const body = {
      amount: Math.round(amt),
      currency: (currency || 'dzd').toString().toLowerCase(),
      success_url,
      failure_url,
      metadata: metadata || {}
    };

    const resp = await fetch('https://pay.chargily.net/api/v2/checkouts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return res.status(resp.status).json({ error: data?.message || 'Failed to create Chargily checkout' });
    }

    res.json({ id: data.id, checkout_url: data.checkout_url });
  } catch (e) {
    console.error('Client server error in /api/chargily/create-checkout:', e);
    res.status(500).json({ error: 'Failed to create Chargily checkout' });
  }
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
