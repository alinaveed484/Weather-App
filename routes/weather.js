const express = require('express');
const axios = require('axios');

const router = express.Router();

// Route to get weather data
router.get('/:city', async (req, res, next) => {
    
    const city = req.params.city;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const weather = response.data;
    
        res.json({
          city: weather.name,
          temperature: weather.main.temp,
          description: weather.weather[0].description
        });
      } catch (error) {
        next(error); // Pass the error to the error-handling middleware
      }

});

module.exports = router;