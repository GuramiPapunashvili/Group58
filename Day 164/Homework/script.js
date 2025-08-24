const http = require("http");


let messages = [];

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/messages") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        if (parsed.message) {
          messages.push(parsed.message);
          console.log("Message saved in messages array:", parsed.message);

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true, msg: "Message saved in messages array" }));
        } else {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Message field is required" }));
        }
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ERROR happened" }));
  }
});

server.listen(3000, () => {

});
