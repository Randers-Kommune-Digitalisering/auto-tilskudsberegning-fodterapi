const Node = {
  "id": "d98bc2510fb3c5fc",
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
  "x": 1220,
  "y": 480,
  "wires": [
    [
      "4329e469feb9a23c"
    ]
  ],
  "_order": 420
}

module.exports = Node;