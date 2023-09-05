const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const today = new Date();
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric"
  };
  const day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    kindOfDay: day,
    newListItem: items
  });
});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});


app.listen("3000");
console.log("This app started at port 3000");
