import http from "http";
import fs from "fs";
import "dotenv/config";

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  try {
    res.setStatusCode = 200;
    throw new Error("Something went wrong");
  } catch (error) {
    res.statusCode = 500;
    fs.appendFile("errors.log", `${error.message}\n`, "utf-8", (err) => {
      if (err) {
        console.error(
          "An error occurred while logging errors to the file",
          err
        );
      }
      console.log("Errors are logged to a file");
    });
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Server running in http://127.0.0.1:${port}`);
});
