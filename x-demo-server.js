//nodejs服务器
const WebSocketServer = require('ws').Server
const http = require('http')

let server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("this is a websocket server \n");
}).listen(8888);

let ws = new WebSocketServer({ server: server });
ws&&console.log('ws服务8888启动成功')

ws.on(
  "connection",
  connection => {
    console.log("has user to connected");
  }
);
