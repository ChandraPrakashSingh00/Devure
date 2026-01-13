const express = require("express");
const app = express();
const cors = require("cors")
const db = require("./config/db");
const contactRoutes = require("./routes/contactRoutes")

db(); 
// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use("/api/contact", contactRoutes);

module.exports = app;
