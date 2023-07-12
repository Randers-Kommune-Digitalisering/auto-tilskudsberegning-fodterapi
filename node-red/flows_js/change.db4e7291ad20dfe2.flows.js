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
  "x": 990,
  "y": 320,
  "wires": [
    [
      "6c9877402be6ea5d"
    ]
  ],
  "_order": 598
}

module.exports = Node;