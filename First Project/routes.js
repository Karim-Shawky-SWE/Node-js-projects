const fs = require("fs");

const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button>Click me</button></form></body>',
    );
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];

      fs.writeFile("message", message, (err) => {
        console.log(err);
      });

      res.statusCode = 302;
      res.setHeader("Location", "/");

      return res.end();
    });

    return;
  }

  res.statusCode = 404;
  res.end("Page not found");
};

// module.exports = {
//   handler: reqHandler,
//   text: "hello from the module exports",
// };

exports.handler = reqHandler;
exports.text = "hello from the module exports";
