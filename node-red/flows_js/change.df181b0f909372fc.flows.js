const Node = {
  "id": "df181b0f909372fc",
  "type": "change",
  "z": "5bb3204aef17c104",
  "d": true,
  "g": "8c06b11e392189b4",
  "name": "Set response",
  "rules": [
    {
      "t": "delete",
      "p": "tempPayload",
      "pt": "flow"
    },
    {
      "t": "delete",
      "p": "tempErrors",
      "pt": "flow"
    },
    {
      "t": "delete",
      "p": "tempPayload",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1290,
  "y": 1380,
  "wires": [
    []
  ],
  "_order": 466
}

module.exports = Node;