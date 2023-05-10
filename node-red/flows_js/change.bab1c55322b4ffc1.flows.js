const Node = {
  "id": "bab1c55322b4ffc1",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set response",
  "rules": [
    {
      "t": "delete",
      "p": "payload.workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.workletPass",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1590,
  "y": 500,
  "wires": [
    [
      "e5908679bccd13f4"
    ]
  ],
  "_order": 423
}

module.exports = Node;