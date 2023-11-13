const Node = {
  "id": "875802def03a852e",
  "type": "change",
  "z": "fd98a6615193936d",
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
      "to": "newRun.uid",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 1800,
  "wires": [
    [
      "5237d5a0a14a8e40"
    ]
  ],
  "_order": 348
}

module.exports = Node;