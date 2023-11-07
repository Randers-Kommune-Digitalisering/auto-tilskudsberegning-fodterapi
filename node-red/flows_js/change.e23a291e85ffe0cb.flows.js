const Node = {
  "id": "e23a291e85ffe0cb",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "1c2c618bca5bc5cc",
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
      "to": "extract_worklet",
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
  "x": 1380,
  "y": 960,
  "wires": [
    [
      "c72e1c79ad619d95"
    ]
  ],
  "_order": 451
}

module.exports = Node;