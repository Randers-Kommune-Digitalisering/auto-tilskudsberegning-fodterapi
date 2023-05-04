const Node = {
  "id": "b87d655f883c06e2",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set grants to accepted",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.grants",
      "pt": "global",
      "to": "payload.toAccept",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.grants",
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
  "y": 780,
  "wires": [
    [
      "fc8d7d5784276add"
    ]
  ],
  "_order": 434
}

module.exports = Node;