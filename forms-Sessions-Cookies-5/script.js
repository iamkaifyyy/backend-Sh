const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res){
    res.send("champion kaifyyy");
})

app.get("/about", function (req, res){
    res.send("about page hai ye");
});

app.get("/profile", function (req, res, next){
    return next(new Error("some error ;occurred"));
})

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

app.listen(3000);
