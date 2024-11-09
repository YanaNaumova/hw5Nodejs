import http from "http";
import "dotenv/config";

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  if ("authorization" in req.headers) {
    res.statusCode = 401;
    res.end("Unauthorized");
  } else {
    res.statusCode = 200;
    res.end("Authorization header received");
  }
});

server.listen(port, () => {
  console.log(`Server running in http://127.0.0.1:${port}`);
});
