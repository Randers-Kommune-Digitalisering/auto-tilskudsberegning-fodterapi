const Node = {
  "id": "2ad7e6614253c6eb",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set rules to accepted",
  "rules": [
    {
      "t": "set",
      "p": "webSettings.acceptances.rules",
      "pt": "global",
      "to": "payload.data.toAccept",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 860,
  "y": 880,
  "wires": [
    [
      "a4eb1bf064248281"
    ]
  ],
  "_order": 634
}

module.exports = Node;