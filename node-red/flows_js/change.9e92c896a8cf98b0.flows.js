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
      "to": "{\t   \"browserWSEndpoint\": \"ws://browserless:3000/\",\t   \"ignoreHTTPSErrors\": true,\t   \"ignoreDefaultArgs\": true\t}",
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
  "_order": 246
}

module.exports = Node;