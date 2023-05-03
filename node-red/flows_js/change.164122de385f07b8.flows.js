const Node = {
  "id": "164122de385f07b8",
  "type": "change",
  "z": "c28a486ea3e09387",
  "d": true,
  "g": "0e177132df886f4e",
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
  "x": 1430,
  "y": 1100,
  "wires": [
    []
  ],
  "_order": 447
}

module.exports = Node;