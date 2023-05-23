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
  "y": 1060,
  "wires": [
    [
      "fc8d7d5784276add"
    ]
  ],
  "_order": 457
}

module.exports = Node;