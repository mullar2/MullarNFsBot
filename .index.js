Here are the basic files you need to upload for your WhatsApp bot:

---

*1. `index.js`*

```js
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
require("dotenv").config();

const client = new Client();

client.on("qr", qr => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Mullar-NFS Bot is ready!");
});

client.on("message", async message => {
  if (message.body === ".hi") {
    message.reply("Hi! I'm Mullar-NFS, your WhatsApp bot.");
  }

  if (message.body.startsWith(".play song")) {
    const song = message.body.replace(".play song ", "");
    message.reply(`Searching for "${song}"... (feature coming soon)`);
  }
});

client.initialize();
```

---


