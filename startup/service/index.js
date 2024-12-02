const express = require("express");
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Serve up the front-end static content hosting
app.use(express.static("public"));

// GET route for homepage
app.get("/", (req, res) => {
  res.send("root");
});

//GET route for about
app.get("/about", (req, res) => {
  res.send("about");
});

//GET route for calendar
app.get("/calendar", (req, res) => {
  res.send("calendar");
});

//GET route for pricing
app.get("/pricing", (req, res) => {
  res.send("pricing");
});
