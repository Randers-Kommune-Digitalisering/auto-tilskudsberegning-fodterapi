const Node = {
  "id": "3bd87ce1093fdd7b",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "b0d1827e59500c85",
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
  "y": 560,
  "wires": [
    [
      "937690017aa7df42"
    ]
  ],
  "_order": 622
}

module.exports = Node;