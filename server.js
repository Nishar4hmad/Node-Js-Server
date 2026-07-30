const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to my Node Js Server");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("About Page");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Contact Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page Not Found");
  }
});

const PORT = 3000;
server.listen(3000, () => {
  console.log(`Server is running at :${PORT}`);
});
