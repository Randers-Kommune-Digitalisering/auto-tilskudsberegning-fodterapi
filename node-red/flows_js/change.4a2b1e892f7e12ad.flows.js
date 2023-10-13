const Node = {
  "id": "4a2b1e892f7e12ad",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "63492761a85db852",
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
  "y": 1500,
  "wires": [
    [
      "eb42d5596baba5be"
    ]
  ],
  "_order": 1028
}

module.exports = Node;