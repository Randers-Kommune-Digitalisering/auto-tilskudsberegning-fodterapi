const Node = {
  "id": "e71fef321ed63090",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Clean msg",
  "rules": [
    {
      "t": "delete",
      "p": "rules",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "citizens",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "receipts",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1170,
  "y": 2760,
  "wires": [
    []
  ],
  "_order": 932
}

module.exports = Node;