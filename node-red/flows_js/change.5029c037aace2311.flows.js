const Node = {
  "id": "5029c037aace2311",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload.webSettings",
      "pt": "msg",
      "to": "#:(storeInFile)::webSettings",
      "tot": "global",
      "dc": true
    },
    {
      "t": "delete",
      "p": "tempMsg",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1395,
  "y": 1340,
  "wires": [
    [
      "964cd2a09691f095"
    ]
  ],
  "l": false,
  "_order": 744
}

module.exports = Node;