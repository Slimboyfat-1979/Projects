const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname)))


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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})