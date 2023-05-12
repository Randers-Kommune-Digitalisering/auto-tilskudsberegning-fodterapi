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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1050,
  "y": 760,
  "wires": [
    [
      "07aa032e7944f93b",
      "3d1bf849f7c2772e"
    ]
  ],
  "info": "",
  "_order": 234
}

Node.info = `
## Set msg.receipts

This change node sets msg.receipts = payload.kvitteringer (which contains an array of receipts), and deletes the payload afterwards.
`

module.exports = Node;