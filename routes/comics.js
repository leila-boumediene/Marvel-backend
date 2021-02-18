const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

// const Characters = require("../models/Characters");
// const Comics = require("../models/Comics");

router.get("/comics", async (req, res) => {
  try {
    const limit = req.query.limit || 100;
    const skip = req.query.skip;

    // const title = req.query.title;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}`
    );
    console.log(process.env.API_KEY);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    res.json({ message: "Create Comics" });
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}:characterId=${characterId}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
