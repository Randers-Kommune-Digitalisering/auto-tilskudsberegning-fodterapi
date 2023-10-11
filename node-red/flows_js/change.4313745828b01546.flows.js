const Node = {
  "id": "4313745828b01546",
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
      "p": "sql",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1220,
  "y": 3940,
  "wires": [
    []
  ],
  "_order": 931
}

module.exports = Node;