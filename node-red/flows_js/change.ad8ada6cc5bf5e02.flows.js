const Node = {
  "id": "ad8ada6cc5bf5e02",
  "type": "change",
  "z": "5bb3204aef17c104",
  "name": "Flyt til global.runHistory",
  "rules": [
    {
      "t": "set",
      "p": "runHistory",
      "pt": "global",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1150,
  "y": 2240,
  "wires": [
    [
      "fdfdb069869539d1"
    ]
  ],
  "_order": 742
}

module.exports = Node;