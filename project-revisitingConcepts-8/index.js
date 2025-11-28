const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    fs.readdir('./files', function(err, files){
        console.log(files);
        res.render("index", {files: files});
    })
});

app.post("/create", function(req, res){
    fs.writeFile(`./files/${req.body.title.split('').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")
    })
}) 


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000;' );
});

