const http = require("http"),
  os = require("os");

http.createServer((req, res) => {
  const dateTime = new Date(),
    load = os.loadavg(),
    doc = `<!DOCTYPE html>
<html>
  <head>
    <title>Hello swarm</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Hello swarm!</h1>
    Swarm-Node: ${os.hostname()}, ver. ${os.release()}<br />
    Serverzeit: ${dateTime}<br />
    Uptime: ${os.uptime()/60/60} Stunden<br />
    Serverauslastung (load): ${load[0]}
  </body>
</html>`
  res.setHeader('Content-Type', 'text/html');
  res.end(doc);
}).listen(80);
