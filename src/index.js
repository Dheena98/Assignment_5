const http = require("http");

const PORT = 8081;

const server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const contactInfo = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    };
    res.write(JSON.stringify(contactInfo));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;