const Node = {
  "id": "19bdc53204115899",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "9354c79c8ad83b63",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Bearbejder data ...",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1810,
  "y": 1220,
  "wires": [
    [
      "75f1aaf5a21e12a8"
    ]
  ],
  "_order": 586
}

module.exports = Node;