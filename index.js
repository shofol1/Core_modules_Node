const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome to Full Stack Development");
    res.end();
  } else if (req.url == "/read") {
    fs.readFile("first.txt", (err, data) => {
      if (err) {
        res.write("fail to read");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/write") {
    fs.readFile("first.txt", (err, data) => {
      if (err) {
        res.write("faild");
        res.end();
      } else {
        fs.writeFile("second.txt", data, (err) => {
          if (err) {
            res.write("faild to write");
            res.end();
          } else {
            res.write("successfull write second txt");
            res.end();
          }
        });
      }
    });
  } else if (req.url == "/append") {
    fs.appendFile("first.txt", "\nNo! It will be full not pull!😞", (err) => {
      if (err) {
        res.write("faild to append");
        res.end();
      } else {
        res.write("succesfully append");
        res.end();
      }
    });
  } else if (req.url == "/delete") {
    fs.unlink("second.txt", (err) => {
      if (err) {
        res.write("failed to delete");
        res.end();
      } else {
        res.write("successfully deleted second txt");
        res.end();
      }
    });
  }
});

server.listen(3000);

console.log("server is listening on 3000 ");
