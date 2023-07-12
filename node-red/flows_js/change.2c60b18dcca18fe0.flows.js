const Node = {
  "id": "2c60b18dcca18fe0",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "3dd412a87fd11491",
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
      "to": "Persondata læst",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "succesful",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1260,
  "y": 1540,
  "wires": [
    [
      "bc61f94d9032dc4c"
    ]
  ],
  "_order": 471
}

module.exports = Node;