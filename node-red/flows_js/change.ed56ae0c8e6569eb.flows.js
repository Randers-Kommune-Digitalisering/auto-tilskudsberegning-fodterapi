const Node = {
  "id": "ed56ae0c8e6569eb",
  "type": "change",
  "z": "36720db510b259f8",
  "name": "Clean MSG object",
  "rules": [
    {
      "t": "delete",
      "p": "regexLib",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "asRegex",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "validateData",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 220,
  "wires": [
    []
  ],
  "_order": 442
}

module.exports = Node;