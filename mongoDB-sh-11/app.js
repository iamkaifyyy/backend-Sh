const express = require('express');
const app = express();

const userModel = require('./usermodel');


app.get('/', (req, res) =>{
    res.send('kaifyyy');
})

app.get('/create', async (req, res) =>{
    let createdUser = await userModel.create({
        name: "kaifyy",
        username: "iamkaifyyy",
        email: "kaifyyy@apple.com"
    })

    console.log(createdUser);
    res.send(createdUser);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");  
})