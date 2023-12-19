const Node = {
  "id": "c92a7a1eda08e3f3",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "Auth",
  "rules": [
    {
      "t": "set",
      "p": "authkey",
      "pt": "msg",
      "to": "BROWSERLESS_AUTH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 910,
  "y": 340,
  "wires": [
    [
      "d30ba0f3f094c17d"
    ]
  ]
}

module.exports = Node;