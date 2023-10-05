const Node = {
  "id": "b3c9d7241e97270d",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "a035b3f8b31d1c58",
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
      "to": "PupController fejl",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "succesful",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "stdout.error",
      "pt": "msg",
      "to": "error.message",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1180,
  "y": 1640,
  "wires": [
    [
      "2648acd11d0a1179"
    ]
  ],
  "_order": 861
}

module.exports = Node;