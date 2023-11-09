const Node = {
  "id": "cadd93e4506ebed4",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "30679eed07d1fb4c",
  "name": "Delete run data",
  "rules": [
    {
      "t": "delete",
      "p": "webSettings",
      "pt": "global"
    },
    {
      "t": "delete",
      "p": "currentRun",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1930,
  "y": 360,
  "wires": [
    [
      "78b31b4b044845c2"
    ]
  ],
  "_order": 593
}

module.exports = Node;