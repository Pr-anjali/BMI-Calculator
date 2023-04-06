const express=require("express")
const app=express()

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html")
})

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  var n1 = parseFloat(req.body.wt);
  var n2 = parseFloat(req.body.ht);
  var result = n1/(n2*n2);
  res.send("Your BMI is "+ result);
});

app.listen(3000);