const express = require("express");
const app = express();
const cors = require("cors")
const db = require("./config/db");
const contactRoutes = require("./routes/contactRoutes")

db(); 
app.use(cors()); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use("/api/contact", contactRoutes);

module.exports = app;
