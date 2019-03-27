const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('../config/keys');

router.post('/search', async (req, res) => {
  const { selectedChain, geolocation } = req.body;
  const { lat, lng } = geolocation;
  const { apiKey } = config;
  let searchString = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${selectedChain}&location=${lat},${lng}&radius=10000&key=${apiKey}`;

  const data = await axios.get(searchString);
  res.status(200).json({ results: data.data.results });
});

router.post('/geolocate', async (req, res) => {
  const { locationInput } = req.body;
  const { apiKey } = config;
  const formattedLocation = locationInput.trim();

  let searchString = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedLocation}&key=${apiKey}`;

  const data = await axios.get(searchString);
  const resultObj = {
    formattedAddress: data.data.results[0].formatted_address,
    geolocation: data.data.results[0].geometry.location
  };

  res.status(200).json({ results: resultObj });
});

module.exports = router;
