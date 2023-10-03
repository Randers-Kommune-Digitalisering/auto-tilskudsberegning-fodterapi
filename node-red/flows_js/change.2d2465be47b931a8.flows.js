const Node = {
  "id": "2d2465be47b931a8",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "91c3a384399b8eee",
  "name": "Set stdout",
  "rules": [
    {
      "t": "set",
      "p": "stdout",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stdout.timestamp",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "stdout.phase",
      "pt": "msg",
      "to": "extract_kp",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "error.source.name",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "stdout.error",
      "pt": "msg",
      "to": "error",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1660,
  "y": 1360,
  "wires": [
    [
      "a922fe23a137d701"
    ]
  ],
  "_order": 858
}

module.exports = Node;