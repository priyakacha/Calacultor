const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/calc.html");
});

// app.get("/" , (req , res) => {
//   res.status(200).json({
//     message: "Server is available"
//   });
// });

app.get("/hello" , (req , res) => {
  res.status(200).json({
    message: "Server is available"
  });
});

app.post("/", function (req, res) {
  var N1 = Number(req.body.N1);
  var N2 = Number(req.body.N2);

  var Result = N1 + N2;

  res.send("The Result is a " + Result);
});



app.get("/BMI" , function(req, res){
  res.sendFile(__dirname + "/BMI.html");
});

app.post("/bmiCalcultor" , function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var BMIResult = weight / (height*height);
  
  res.send("the BMI is Result is a " + BMIResult);
});

app.listen(5050,  () => {
  console.log("---------------------- Server Connected ----------------------");
});
