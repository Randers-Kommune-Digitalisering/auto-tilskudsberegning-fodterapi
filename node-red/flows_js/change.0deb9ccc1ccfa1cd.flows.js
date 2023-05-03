const Node = {
  "id": "0deb9ccc1ccfa1cd",
  "type": "change",
  "z": "5bb3204aef17c104",
  "d": true,
  "g": "63492761a85db852",
  "name": "set as archived",
  "rules": [
    {
      "t": "set",
      "p": "webData.citizens-actions[msg.payload.id].archived",
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
  "y": 1200,
  "wires": [
    [
      "33ee436ad9ead077"
    ]
  ],
  "_order": 460
}

module.exports = Node;