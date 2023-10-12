const Node = {
  "id": "ab4d56396e39a3c3",
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
      "p": "sql",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 480,
  "wires": [
    [
      "4329e469feb9a23c"
    ]
  ],
  "_order": 473
}

module.exports = Node;