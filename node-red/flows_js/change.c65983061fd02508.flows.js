const Node = {
  "id": "c65983061fd02508",
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
  "x": 1590,
  "y": 820,
  "wires": [
    [
      "e5908679bccd13f4"
    ]
  ],
  "_order": 447
}

module.exports = Node;