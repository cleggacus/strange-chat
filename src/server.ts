import http from "http";
import path from "path";
import express from "express";
import app from "./api";

const dev = process.env.NODE_ENV !== 'production';
const devPort = 3001;

if(!dev) {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || devPort;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`> listening at port ${port}`);
});
