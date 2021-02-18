const express = require("express");
// je n'ai pas besoins de express formidable car pas de route post
// const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

const app = express();
// app.use(formidable());
app.use(cors());

// j'appelle mes différentes routes créées
const characteresRoutes = require("./routes/characters");
app.use(characteresRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);
const userRoutes = require("./routes/user");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Marvel world" });
});

app.all("*", (req, res) => {
  req.statusCode(404).json({ message: "Not page found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
