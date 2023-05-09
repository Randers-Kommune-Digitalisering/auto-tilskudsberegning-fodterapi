const Node = {
  "id": "9e92c896a8cf98b0",
  "type": "change",
  "z": "41d1b8798efe7e15",
  "name": "Set browser settings",
  "rules": [
    {
      "t": "set",
      "p": "browserWS",
      "pt": "msg",
      "to": "ws://browserless:3000",
      "tot": "str"
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
  "_order": 102
}

module.exports = Node;