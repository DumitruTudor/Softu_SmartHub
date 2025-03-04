const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

// Handle contact form submission
app.post("/contact", (req, res) => {
    console.log(req.body);
    res.send("Message received!");
});

// Export the app for Vercel
module.exports = app;
