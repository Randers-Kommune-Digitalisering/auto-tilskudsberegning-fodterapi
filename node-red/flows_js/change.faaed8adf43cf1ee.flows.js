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
      "to": "DQ_TESTUSER",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "dqPass",
      "pt": "msg",
      "to": "DQ_TESTPASS",
      "tot": "env",
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
  "_order": 862
}

module.exports = Node;