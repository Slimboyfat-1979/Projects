const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const { json } = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

const directoryPath = __dirname;
app.use(express.static(directoryPath));


app.get("/", (req, res) => {
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      res.send(500).send("Error reading the directory");
      return;
    } else {
      const jsonData = files
        .filter((file) => file.isDirectory)
        .map((folder) => folder.name);
      const listItems = jsonData
        .map((name) => `<li><a href="/${name}">${name}</a></li>`)
        .join("");
      res.send(`
             <!DOCTYPE html>
             <html lang="en">
             <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Projects</title>
             </head>
             <body>
             <h3>Projects</h3>
             <ul>
             ${listItems}
             </ul>
             </body>
             </html>
            `);
    }
  });
});

app.get("/:folder", (req, res) => {
    const folder = req.params.folder;
    const folderPath = path.join(__dirname, folder);
    app.use(`/${folder}`, express.static(folderPath))

    const filePath = path.join(folderPath, 'index.html');
    res,sendFile(filePath)
    res.sendFile(filePath);
});


app.use(express.static(directoryPath));



app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
