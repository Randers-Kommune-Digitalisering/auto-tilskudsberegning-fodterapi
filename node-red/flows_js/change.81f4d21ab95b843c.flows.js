const Node = {
  "id": "81f4d21ab95b843c",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "payload.data.pageToAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.toAccept",
      "pt": "msg",
      "to": "payload.data.toAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload.data",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1450,
  "y": 940,
  "wires": [
    [
      "e5908679bccd13f4"
    ]
  ],
  "_order": 763
}

module.exports = Node;