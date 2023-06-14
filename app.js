var express = require("express");
var path = require("path");

const app = express();

app.listen(8000, () => {
  console.log("listening on ", 8000);
});

app.use(express.static("dist"));

app.get("/", function (req, resp) {
  resp.sendFile(path.join(__dirname + "/dist/index.html"));
});

// app.get("/static/*", function (req, resp) {
//   resp.sendFile(__dirname + "/public/");
// });
