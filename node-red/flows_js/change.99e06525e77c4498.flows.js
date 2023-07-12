const Node = {
  "id": "99e06525e77c4498",
  "type": "change",
  "z": "f99fd88fa65c74b9",
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
  "x": 1160,
  "y": 500,
  "wires": [
    [
      "999fc2efbe4ef970"
    ]
  ],
  "_order": 622
}

module.exports = Node;