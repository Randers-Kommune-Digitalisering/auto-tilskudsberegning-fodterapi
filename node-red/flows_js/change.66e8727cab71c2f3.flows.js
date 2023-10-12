const Node = {
  "id": "66e8727cab71c2f3",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "63b598a9c0a41f91",
  "name": "status = 200",
  "rules": [
    {
      "t": "set",
      "p": "payload.statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 340,
  "wires": [
    [
      "c6e0fde72ed6d7d4"
    ]
  ],
  "_order": 1002
}

module.exports = Node;