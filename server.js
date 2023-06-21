const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const dataFile = "data.json";

// Read JSON file
app.get("/api/data", (req, res) => {
  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const jsonData = JSON.parse(data);
      return res.json(jsonData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

// Write JSON file
app.post("/api/data", (req, res) => {
  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const existingData = JSON.parse(data);
      const newData = req.body;
      existingData.push(newData);

      fs.writeFile(dataFile, JSON.stringify(existingData), "utf8", (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        return res.status(200).json({
          message: "Data Post successfully",
          data: existingData,
        });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

const port = 3001; // Change it to the desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
