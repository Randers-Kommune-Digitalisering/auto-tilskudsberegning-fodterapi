const Node = {
  "id": "9e92c896a8cf98b0",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "Set msg.browserless",
  "rules": [
    {
      "t": "set",
      "p": "browserless",
      "pt": "msg",
      "to": "{\t    \"browserWSEndpoint\": \"wss://browserless.prototypes.randers.dk/?ignoreHTTPSErrors=true&exitOnPageError=false&protocolTimeout=10000&--no-zygote&--disable-site-isolation-trials&--disable-dev-shm-usage&--disable-features=IsolateOrigins&--deterministic-fetch&--disable-setuid-sandbox&--disable-gpu&headless=true\",\t    \"headers\": {\t        \"authorization\": \"Basic \" & authkey\t    },\t    \"slowMo\": 10\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 340,
  "wires": [
    [
      "d68baf48942491dd"
    ]
  ],
  "_order": 35
}

module.exports = Node;