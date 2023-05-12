const Node = {
  "id": "e6a016eb2ab7c47b",
  "type": "change",
  "z": "5bb3204aef17c104",
  "d": true,
  "g": "63492761a85db852",
  "name": "set as archived",
  "rules": [
    {
      "t": "set",
      "p": "webData.citizens-noactions[msg.payload.id].archived",
      "pt": "global",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 1240,
  "wires": [
    [
      "33ee436ad9ead077"
    ]
  ],
  "_order": 466
}

module.exports = Node;