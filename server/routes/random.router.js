const express = require('express');
const router = express.Router();
const axios = require("axios");


router.get("/:limit?", async (req, res) => {
    try {
    let limit = 2;
    if(req.params.limit){
        limit = req.params.limit
    }
    console.log(limit);
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&limit=${limit}`
      );
      res.send(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });


module.exports = router;