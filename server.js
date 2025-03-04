const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); // Use static files from the 'public' folder
app.use(express.urlencoded({ extended: true })); // Middleware to parse url-encoded form data 

// Route to get handle requests to root url "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

const PORT = 3000; // Run server on port 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
