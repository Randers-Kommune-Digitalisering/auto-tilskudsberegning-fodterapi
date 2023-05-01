const Node = {
  "id": "6558b47eb74e6c0c",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "Sæt msg.receipts",
  "rules": [
    {
      "t": "set",
      "p": "receipts",
      "pt": "msg",
      "to": "payload.kvitteringer",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1585,
  "y": 580,
  "wires": [
    [
      "07aa032e7944f93b",
      "8bc31d06862e8fe2"
    ]
  ],
  "l": false,
  "info": "",
  "_order": 226
}

Node.info = `
## Set msg.receipts

This change node sets msg.receipts = payload.kvitteringer (which contains an array of receipts), and deletes the payload afterwards.
`

module.exports = Node;