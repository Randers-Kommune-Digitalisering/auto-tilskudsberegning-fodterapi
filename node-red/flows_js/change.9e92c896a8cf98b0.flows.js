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
      "to": "{\t   \"browserWSEndpoint\": \"wss://browserless.prototypes.randers.dk/\",\t   \"ignoreHTTPSErrors\": true,\t   \"ignoreDefaultArgs\": true,\t   \"exitOnPageError\": false,\t   \"timeout\": 1200000,\t   \"keepalive\": 300000\t}",
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