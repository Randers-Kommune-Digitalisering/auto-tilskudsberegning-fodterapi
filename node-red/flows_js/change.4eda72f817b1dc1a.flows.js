const Node = {
  "id": "4eda72f817b1dc1a",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "947838261d7c3e0b",
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
  "y": 760,
  "wires": [
    [
      "5a6cfbda04154265"
    ]
  ],
  "_order": 609
}

module.exports = Node;