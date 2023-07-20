const Node = {
  "id": "99e06525e77c4498",
  "type": "change",
  "z": "1260b784fb72ac25",
  "name": "Rens svar",
  "rules": [
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "error",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "tablename",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1220,
  "y": 120,
  "wires": [
    [
      "999fc2efbe4ef970"
    ]
  ],
  "_order": 362
}

module.exports = Node;