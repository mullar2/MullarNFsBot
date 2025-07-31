# MullarNFsBot
let reply = "Hi, I'm " + BOT_NAME;

  if (msg.includes("hi") || msg.includes("hello")) {
    reply = "Hello! I'm " + BOT_NAME + ", how can I assist you?";
  } else if (msg.includes(".play song")) {
    const song = msg.sppackage.json`
```json
{
  "name": "mullar-nfs-bot",
  "version": "1.0.0",
  "description": "A simple WhatsApp chatbot",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "express": "^4.18.2",
    "node-fetch": "^3.3.2"
  }
}
```

`index.js`
```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const BOT_NAME = "Mullar-NFS";
const OWNER = "Mullar";

app.use(express.json());

app.post('/webhook', (req, res) => {
  const msg = req.body.message?.toLowerCase() || '';
lit(".play song")[1]?.trim();
