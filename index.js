const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const course = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("Think Showcase Api Running");
});

app.get("/courses", (req, res) => {
  res.send(course);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  if (id > 6) {
    res.send("Sorry! No Data Found");
  } else {
    const singleCourse = course.find((c) => c.id == id);
    res.send(singleCourse);
  }
});

app.listen(port, () => {
  console.log("Think Showcase Server Running");
});
