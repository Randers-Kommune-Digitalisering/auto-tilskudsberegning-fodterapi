const Node = {
  "id": "d309e8b7788ef6e6",
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
  "x": 1200,
  "y": 420,
  "wires": [
    [
      "55f991ab5fce3241"
    ]
  ],
  "_order": 363
}

module.exports = Node;