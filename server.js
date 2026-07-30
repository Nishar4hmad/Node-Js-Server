const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const API = {
    success: true,
    message: "Welcome to my first API",
  };

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to my Node Js Server");
  } else if (url === "/api" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(API));
  } else if (url === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("About page");
  } else if (url === "/contact" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Contact Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("Page Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at :${PORT}`);
});
