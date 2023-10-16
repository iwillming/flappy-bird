const express = require("express");
const parser = require("body-parser");

const protocol = "http:";
const host = "127.0.0.1";
const hostname = "localhost";
const port = 3000;

const source = "dist";

express()
  .use(express.static(source))
  .use(parser.json({ limit: "5MB" }))
  .use(parser.json({ type: "application/json" }))
  .use(parser.json({ extended: false }))
  .listen(port, (e) => {
    if (e) {
      console.error(e);
    } else {
      console.log(`we are listening ${protocol}//${host}:${port}`);
      console.log(`we are listening ${protocol}//${hostname}:${port}`);
    }
  });
