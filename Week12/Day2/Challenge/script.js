const { largeNumber } = require("./main");
const http = require("http");

const b = 5;
let c = largeNumber + b;
console.log(c);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  //   res.write(<h1>Hi there at the frontend</h1>);
  res.end(`<p>My Module is:${c}</p>
    <h1>Hi there at the frontend</h1>`);

  console.log("I am listening");
});
server.listen(3000);
