const Node = {
  "id": "eb0ffda14742d0d4",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Sæt msg.receipts",
  "rules": [
    {
      "t": "set",
      "p": "receipts",
      "pt": "msg",
      "to": "payload.kvitteringer",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 850,
  "y": 680,
  "wires": [
    [
      "3e94f16cbdc4ee31"
    ]
  ],
  "info": "",
  "_order": 832
}

Node.info = `
## Set msg.receipts

This change node sets msg.receipts = payload.kvitteringer (which contains an array of receipts), and deletes the payload afterwards.
`

module.exports = Node;