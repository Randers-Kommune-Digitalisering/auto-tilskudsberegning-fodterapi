const Node = {
  "id": "52e0e93a85f5354d",
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
      "p": "runUid",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 4540,
  "wires": [
    [
      "83bd03807a324f77"
    ]
  ],
  "_order": 989
}

module.exports = Node;