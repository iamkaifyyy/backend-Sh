const express = require('express');
 
const app = express();

app.use(function (req, res, next){
  console.log("Time;", Date.now());
  console.log("middlware chaalaaa! bc");
  next();
});

app.use(function (req, res, next){
  console.log("second middleware");
  next();

})

app.get("/", (req, res) => {
  res.send("hello world! baby");
});

app.get("/about", (req, res) => {
  res.send("comatozze");
});

app.get("/profile",(req, res, next) =>{
  return next(new Error("Something went wrong in profile"));
  res.send("this is profile page");
})

// error handling middleware
app.use(function (err, req, res, next){
  console.error(err.stack);
  res.status(500).send("Something broke!");
  
})

app.listen(3000);

// middlewares