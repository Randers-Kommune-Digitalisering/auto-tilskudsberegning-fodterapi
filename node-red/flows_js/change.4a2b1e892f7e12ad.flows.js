const Node = {
  "id": "4a2b1e892f7e12ad",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "404b73d5fb6cfa91",
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
      "to": "payload.data.id",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 1460,
  "wires": [
    [
      "df72e991ebbca4c9"
    ]
  ],
  "_order": 716
}

module.exports = Node;