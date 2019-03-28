let http = require("http"),
  fs = require("fs"),
  url = require("url"),
  path = require("path");

let hasMore = true;

let server = http.createServer((req, res) => {
  //解决跨域问题
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // if(req.method === "OPTIONS") return res.end();/*让options请求快速返回*/

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-Width");
  res.setHeader("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
  if (req.method === "OPTIONS") return res.end();




  let {pathname, query} = url.parse(req.url, true);

  if (pathname === "/banner") {
    let conFile = fs.readFileSync("./banner.json", "utf-8");
    res.writeHead(200, {"content-type": "application/json;charset=utf-8;"});
    res.end(conFile);
    return;
  }

  if (pathname === "/hotbooks") {
    let conFile = fs.readFileSync("./book.json", "utf-8");
    let books = JSON.parse(conFile).reverse().slice(0, 6);
    res.writeHead(200, {"content-type": "application/json;charset=utf-8;"});
    res.end(JSON.stringify(books));
    return;
  }

  if (pathname === "/books") {
    let id = parseInt(query.id);
    switch (req.method) {
      case "GET":
        if (id) {
          let conFile = fs.readFileSync("./book.json", "utf-8");
          let books = JSON.parse(conFile);
          let book = books.find(item => item.bookId === id);
          res.writeHead(200, {"content-type": "application/json;charset=utf-8;"});
          res.end(JSON.stringify(book));
        } else {
          let conFile = fs.readFileSync("./book.json", "utf-8");
          res.writeHead(200, {"content-type": "application/json;charset=utf-8;"});
          res.end(conFile);
        }
        break;
      case "POST":
          let str = "";
          req.on("data", (chunk) => {str += chunk});
          req.on("end", () => {
            let book = JSON.parse(str);
            let conFile = fs.readFileSync("./book.json", "utf-8");
            let books = JSON.parse(conFile).reverse();
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
            books.push(book);
            books.reverse();
            fs.writeFileSync("./book.json", JSON.stringify(books), "utf-8");
            res.end("添加成功");
          });
        break;
      case "PUT":
        if (id) {
          let str = "";
          req.on("data", (chunk) => {str += chunk});
          req.on("end", () => {
            let book = JSON.parse(str);
            let conFile = fs.readFileSync("./book.json", "utf-8");
            let books = JSON.parse(conFile);
            books = books.map(item => {
              if (item.bookId === id) {
                return book;
              }
              return item;
            });
            fs.writeFileSync("./book.json", JSON.stringify(books), "utf-8");
            res.end("修改成功");
          });
        }
        break;
      case "DELETE":
        let conFile = fs.readFileSync("./book.json", "utf-8");
        let books = JSON.parse(conFile);
        books = books.filter(item => {return item.bookId !== id});
        fs.writeFileSync("./book.json", JSON.stringify(books), "utf-8");
        res.end("删除成功");
        break;
    }
  }

  if (pathname === "/page") {
    let offset = parseInt(query.offset) || 0;
    let conFile = JSON.parse(fs.readFileSync("./book.json", "utf-8"));
    let books = conFile.reverse().slice(offset, offset + 5);
    if (offset + 5 < conFile.length) {
      hasMore = true
    }
    if (offset + 5 > conFile.length) {
      hasMore = false
    }
    res.writeHead(200, {"content-type": "application/json;charset=utf-8;"});
    res.end(JSON.stringify({hasMore, books}));
  }

  // 静态服务
  // 读取一个路径
  fs.stat('.' + pathname, (err, stats) => {
    if (err) {
      // res.statusCode = 404;
      // res.end('not found');
      let conFile = fs.readFileSync("index.html", "utf-8");
      res.end(conFile);
    } else {
      if (stats.isDirectory()) {
        let p = path.join('.' + pathname, 'index.html');
        fs.createReadStream(p).pipe(res);
      } else {
        fs.createReadStream('.' + pathname).pipe(res);
      }
    }
    return;
  });
});

server.listen(3000, () => {
  console.log("the server has been created successful, listening on 3000 port!");
});
