const Node = {
  "id": "d309e8b7788ef6e6",
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
  "x": 1120,
  "y": 800,
  "wires": [
    []
  ],
  "_order": 619
}

module.exports = Node;