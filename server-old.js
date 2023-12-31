const http = require("http");

const books = [
  { id: 1, name: "Clean Code", price: 200 },
  { id: 2, name: "DSA for Beginners", price: 500 },
  { id: 3, name: "Algorithms", price: 800 },
];

let handler = (req, res) => {
  // Routing
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.write("Hello World!");
      break;
    case "/api":
      res.writeHead(200);
      res.write("Hello API");
      break;
    case "/books":
      res.writeHead(200);
      res.write(JSON.stringify(books));
      break;
    default:
      res.writeHead(404);
      break;
  }
  res.end();
};

const server = http.createServer(handler);

const PORT = process.env.PORT || 5000;
// Higher Order Function
server.listen(PORT, () => console.log(`Server is Running on ${PORT}!`));

// HTTP

// Status
// 1xx - Informational
// 2xx - Successful
// 3xx - Redirect
// 4xx - User/Client Error
// 5xx - Server Error

// REST - REpresentational State Transfer
// Client - Cache - Server - Database
// 1 - Uniform Interface -
// 2 - Client Server Decoupling -
// 3 - Statelessness -
// 4 - Cacheability - Cache -
// 5 - Layered System Architecture - Route - Middlewares (Authentication, Multimedia, etcc,,,) - Database
// 6 - Code On Demand - Optional -

// JS (NOde JS & Express JS), Python, Java

// REST APIs -> HTTP -> CRUD Operations
// C -> Create Data -> POST
// R -> Read Data -> GET
// U -> Update Data -> PATCH / PUT
// D -> Delete Data -> DELETE

// Body -> Get Back Result -> Send The Data
// Request Headers & Parameters ->
