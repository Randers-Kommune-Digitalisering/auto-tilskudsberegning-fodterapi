const Node = {
  "id": "15a4a332983b2862",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "name": "Forespørgsel \\n variabler",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "receipts",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "receiptId",
      "pt": "msg",
      "to": "1b2c3d4e-5f6a-7890-4321-f6e5d4c3b2a1",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 4140,
  "wires": [
    [
      "eef22b37cc07fa10"
    ]
  ],
  "_order": 938
}

module.exports = Node;