const Node = {
  "id": "2ad7e6614253c6eb",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set rules to accepted",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.rules",
      "pt": "global",
      "to": "payload.toAccept",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.rules",
      "pt": "msg",
      "to": "payload.toAccept",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 600,
  "wires": [
    [
      "a4eb1bf064248281"
    ]
  ],
  "_order": 420
}

module.exports = Node;