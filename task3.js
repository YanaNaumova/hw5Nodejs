import http from "http";
import "dotenv/config";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.statusCode = 200;
  if (req.method === "PUT") {
    res.end("PUT-запрос обработан");
  } else if (req.method === "DELETE") {
    res.end("DELETE-запрос обработан");
  } else {
    res.statusCode = 405;
    res.end("метод не найден");
  }
});

server.listen(port, () => {
  console.log(`server running in http://127.0.0.1:${port}`);
});
