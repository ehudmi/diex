const http = require("http");
const json = {
  menu: {
    id: "file",
    value: "File",
    popup: {
      menuitem: [
        { value: "New", onclick: "CreateNewDoc()" },
        { value: "Open", onclick: "OpenDoc()" },
        { value: "Close", onclick: "CloseDoc()" },
      ],
    },
  },
};
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(json));
  } else {
    res.end("Another page");
  }
});
server.listen(5000);
console.log("Node.js web server at port 5000 is running..");
