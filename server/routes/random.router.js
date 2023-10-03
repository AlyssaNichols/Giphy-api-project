const express = require('express');
const router = express.Router();
const axios = require("axios");


router.get("/", async (req, res) => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`
      );
      res.send(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });


module.exports = router;