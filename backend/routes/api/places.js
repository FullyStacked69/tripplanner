const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/activities/:location', async (req, res) => {
    const location = req.params.location;
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    const type = req.query.type || 'tourist_attraction';  // Use the type from query or default to tourist_attraction

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=${type}&key=${GOOGLE_MAPS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Google Places API', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
