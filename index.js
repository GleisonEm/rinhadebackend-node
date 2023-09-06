const express = require("express");

const PORT = process.env.PORT || 8980;

const app = express()

app.get("/", (req, res) => res.json({ "message": "Hello World" }));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
