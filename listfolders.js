const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());


const directoryPath = __dirname;

app.get("/", (req, res) => {
    fs.readdir(directoryPath, {withFileTypes: true}, (err, files) => {
        if(err) {
            res.status(500).send('Error reading the directory');
            return;
        }

        const folderNames = files.filter(file => file.isDirectory).map(folder => folder.name);

        res.json(folderNames);
    })
})


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})