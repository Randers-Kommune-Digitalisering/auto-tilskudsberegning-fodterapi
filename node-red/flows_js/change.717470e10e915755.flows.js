const Node = {
  "id": "717470e10e915755",
  "type": "change",
  "z": "fd98a6615193936d",
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
  "x": 1240,
  "y": 180,
  "wires": [
    [
      "6b78d032efb9dadb"
    ]
  ],
  "_order": 409
}

module.exports = Node;