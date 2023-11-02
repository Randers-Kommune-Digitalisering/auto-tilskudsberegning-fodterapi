const Node = {
  "id": "99996a2ba1551ca9",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "473e95a14e971e50",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "complete",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "delete",
      "p": "statusCode",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "req",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "res",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 685,
  "y": 640,
  "wires": [
    [
      "6e7324dd735a8498"
    ]
  ],
  "l": false,
  "_order": 735
}

module.exports = Node;