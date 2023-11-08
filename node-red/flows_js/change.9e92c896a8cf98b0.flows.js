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
      "to": "{\t   \"browserWSEndpoint\": \"wss://browserless.prototypes.randers.dk/?ignoreHTTPSErrors=true&exitOnPageError=false&keepalive=30000&--no-zygote&--disable-site-isolation-trials&--disable-dev-shm-usage&--disable-features=IsolateOrigins&--deterministic-fetch&--disable-setuid-sandbox&--disable-gpu&headless=true\",\t   \"slowMo\": 10,\t   \"args\": [\t        '--disable-gpu',\t        '--disable-dev-shm-usage',\t        '--disable-setuid-sandbox',\t        '--no-first-run',\t        '--no-sandbox',\t        '--no-zygote',\t        '--deterministic-fetch',\t        '--disable-features=IsolateOrigins',\t        '--disable-site-isolation-trials'\t    ]\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 920,
  "y": 340,
  "wires": [
    [
      "d68baf48942491dd"
    ]
  ],
  "_order": 188
}

module.exports = Node;