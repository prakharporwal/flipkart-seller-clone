var express = require("express");
var path = require("path");

const app = express();

app.listen(8000, () => {
  console.log("listening on ", 8000);
});

app.use(express.static("dist"));

app.use(function (req, resp) {
  resp.sendFile(path.join(__dirname + "/dist/index.html"));
});

// app.get("/static/*", function (req, resp) {
//   resp.sendFile(__dirname + "/public/");
// });

// app.set("view engine", "ejs");

// const user = {
//   firstName: "Prakhar",
//   lastName: "Porwal",
//   Role: "UI Engineer",
//   admin: true,
// };

// const tasks = [
//   {
//     title: "Understanding Templating Engine internals",
//     description: "Understand how it works, flow, ",
//   },
//   {
//     title: "know about the architecture of backend for Mass Mart",
//     description:
//       "what is the HLD, what is the LLD, what is the Infra structure, how is the business side working for it ?",
//   },
// ];

app.get("/hello", function (req, resp) {
  resp.render("pages/index", {
    user: user,
    title: "Introduction",
    tasks: tasks,
  });
});
