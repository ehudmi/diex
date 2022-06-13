let http = require("http");

const server = http
  .createServer(function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  })
  .listen(3000);
