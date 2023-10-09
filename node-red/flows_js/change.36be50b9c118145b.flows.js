const Node = {
  "id": "36be50b9c118145b",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "35dc64eece977604",
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
      "to": "transform",
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
  "x": 1820,
  "y": 1840,
  "wires": [
    [
      "c989e20d04235526"
    ]
  ],
  "_order": 748
}

module.exports = Node;