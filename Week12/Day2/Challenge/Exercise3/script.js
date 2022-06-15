const { toDay } = require("./main");
const http = require("http");

toDay();

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end(`<h1>The date and time are currently:${toDay()}<h1>`);

  console.log("I am listening");
});
server.listen(8080);
