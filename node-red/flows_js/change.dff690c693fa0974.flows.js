const Node = {
  "id": "dff690c693fa0974",
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
      "tot": "msg"
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
  "x": 1610,
  "y": 640,
  "wires": [
    [
      "e5908679bccd13f4"
    ]
  ],
  "_order": 440
}

module.exports = Node;