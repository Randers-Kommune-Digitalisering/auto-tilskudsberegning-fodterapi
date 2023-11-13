const Node = {
  "id": "faaed8adf43cf1ee",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dd8bf1dc973547ed",
  "name": "KP Login",
  "rules": [
    {
      "t": "set",
      "p": "dqUser",
      "pt": "msg",
      "to": "webData.dqCreds.dqUser",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "dqPass",
      "pt": "msg",
      "to": "webData.dqCreds.dqPass",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 1400,
  "wires": [
    [
      "78c179f6f79b60a1"
    ]
  ],
  "_order": 491
}

module.exports = Node;