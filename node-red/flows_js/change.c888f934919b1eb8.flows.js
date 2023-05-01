const Node = {
  "id": "c888f934919b1eb8",
  "type": "change",
  "z": "c28a486ea3e09387",
  "d": true,
  "g": "e4e7a254403521e9",
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
      "d84057a8cb05b22f"
    ]
  ],
  "_order": 439
}

module.exports = Node;