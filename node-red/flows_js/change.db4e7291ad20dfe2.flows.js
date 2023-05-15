const Node = {
  "id": "db4e7291ad20dfe2",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "63b598a9c0a41f91",
  "name": "status = 401",
  "rules": [
    {
      "t": "set",
      "p": "payload.statusCode",
      "pt": "msg",
      "to": "401",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 560,
  "wires": [
    [
      "6c9877402be6ea5d"
    ]
  ],
  "_order": 490
}

module.exports = Node;