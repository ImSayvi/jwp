// const http = require("http");
// const fs = require("fs");
// http
//   .createServer(function (req, res) {
//     if (req.url == "/") {
//       fs.readFile("./titles.json", function (err, data) {
//         if (err) {
//           console.error(err);
//           res.end("titles.json error");
//         } else {
//           const titles = JSON.parse(data.toString());
//           fs.readFile("./template.html", function (err, data) {
//             if (err) {
//               console.error(err);
//               res.end("template.html error");
//             } else {
//               const tmpl = data.toString();
//               const html = tmpl.replace("%", titles.join("</li><li>"));
//               res.writeHead(200, { "Content-Type": "text/html" });
//               res.end(html);
//             }
//           });
//         }
//       });
//     }
//   })
//   .listen(8000, "127.0.0.1");

//jak nodemon nie działa:
//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

// //łądniej bo są oddzielne funckje bez zagnieżdżeń
// const http = require("http");
// const fs = require("fs");

// const server = http
//   .createServer(function (req, res) {
//     getTitles(res);
//   })
//   .listen(8000, "127.0.0.1");

// function getTitles(res) {
//   fs.readFile("./titles.json", function (err, data) {
//     if (err) {
//       hadError(err, res);
//       return; // wczesne zakończenie
//     }

//     let titles;
//     try {
//       titles = JSON.parse(data.toString());
//     } catch (parseErr) {
//       hadError(parseErr, res);
//       return; // jeśli błąd parsowania JSON
//     }

//     getTemplate(titles, res);
//   });
// }

// function getTemplate(titles, res) {
//   fs.readFile("./template.html", function (err, data) {
//     if (err) {
//       hadError(err, res);
//       return; // wczesne zakończenie
//     }

//     formatHtml(titles, data.toString(), res);
//   });
// }

// function formatHtml(titles, tmpl, res) {
//   if (!Array.isArray(titles) || titles.length === 0) {
//     hadError(new Error("Brak tytułów w pliku titles.json"), res);
//     return; // wczesne zakończenie
//   }

//   if (!tmpl.includes("%")) {
//     hadError(new Error("Szablon nie zawiera znacznika '%'"), res);
//     return; // wczesne zakończenie
//   }

//   const html = tmpl.replace("%", titles.join("</li><li>"));
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(html);
// }

// function hadError(err, res) {
//   console.error("Wystąpił błąd:", err.message);
//   res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
//   res.end("Błąd serwera: " + err.message);
// }

function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}
const events = require("events");
const util = require("util");
util.inherits(Watcher, events.EventEmitter);
const fs = require("fs");
const watchDir = "./watch";
const processedDir = "./done";
Watcher.prototype.watch = function () {
  const watcher = this;
  fs.readdir(this.watchDir, function (err, files) {
    if (err) throw err;
    for (var index in files) {
      watcher.emit("process", files[index]);
    }
  });
};
Watcher.prototype.start = function () {
  const watcher = this;
  fs.watchFile(watchDir, function () {
    watcher.watch();
  });
};
const watcher = new Watcher(watchDir, processedDir);
watcher.on("process", function process(file) {
  const watchFile = this.watchDir + "/" + file;
  const processedFile = this.processedDir + "/" + file.toLowerCase();
  fs.rename(watchFile, processedFile, function (err) {
    if (err) throw err;
  });
});
watcher.start();
