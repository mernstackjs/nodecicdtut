const express = require("express");
const port = 4000;
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "ahmed" });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
