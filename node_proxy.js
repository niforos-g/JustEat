// This is the proxy server necessary to handle the CORS policy restriction on the API
// You will need to start the proxy by running
// node node_proxy.js 
// on the terminal, in the directory that this file is saved
// More information on the README file

const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/restaurants/:postcode', async (req, res) => {
  try {
    const url = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${req.params.postcode}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Proxy running on http://localhost:3000'));