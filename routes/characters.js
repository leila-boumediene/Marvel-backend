const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
// const isAuthenticated = require("../middleware/isAuthentificated");

const Comics = require("../models/Comics");
const Characters = require("../models/Characters");
const { default: axios } = require("axios");

router.get("/characters", async (req, res) => {
  try {
    console.log(req.fields);
    // const comics = req.fields.comics;
    // const _id = req.fields._id;
    // const name = req.fields.name;
    // const description = req.fields.description;

    const limit = req.query.limit || 100;
    const skip = req.query.skip;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&skip=${skip}&limit=${limit}`
    );

    // res.json({ message: "Charaters List" });
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/characters/search", async (req, res) => {
  try {
    console.log(req.fields);
    // const comics = req.fields.comics;
    // const _id = req.fields._id;
    // const name = req.fields.name;
    // const description = req.fields.description;

    const name = req.query.name;
    const _id = req.query._id;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&name=${name}&_id=${_id}`
    );

    // res.json({ message: "Charaters List" });
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
