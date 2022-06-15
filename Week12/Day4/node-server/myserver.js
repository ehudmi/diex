const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<h1>This is my first response</h1><h2>This is my second response</h2><h3>This is my third response</h3>"
  );
  res.end();
});
server.listen(3000);
