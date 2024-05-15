const Node = {
  "id": "d30ba0f3f094c17d",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "Set msg.browserless",
  "rules": [
    {
      "t": "set",
      "p": "browserless",
      "pt": "msg",
      "to": "{\t    \"browserWSEndpoint\": \"wss://browserless.prototypes.randers.dk:443/\" &\t                         \"?ignoreHTTPSErrors=true\" &\t                         \"&exitOnPageError=false\" &\t                         \"&protocolTimeout=30000\" &\t                         \"&--no-zygote\" &\t                         \"&--disable-site-isolation-trials\" &\t                         \"&--disable-dev-shm-usage\" &\t                         \"&--disable-features=IsolateOrigins\" &\t                         \"&--deterministic-fetch\" &\t                         \"&--disable-setuid-sandbox\" &\t                         \"&--disable-gpu\" &\t                         \"&headless=new\",\t    \"headers\": {\t        \"authorization\": \"Basic \" & authkey\t    },\t    \"slowMo\": 10\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1100,
  "y": 340,
  "wires": [
    [
      "d68baf48942491dd",
      "704b6fa1cfb6c584"
    ]
  ]
}

module.exports = Node;