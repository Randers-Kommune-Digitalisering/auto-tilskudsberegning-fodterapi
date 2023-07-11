const Node = {
  "id": "8e98d587893f156c",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "Clean msg",
  "rules": [
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "workletPass",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "selectors",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "presetStartDate",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "presetEndDate",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1470,
  "y": 320,
  "wires": [
    [
      "9f04b233af112b02"
    ]
  ],
  "info": "",
  "_order": 425
}

Node.info = `
## Set msg.receipts

This change node sets msg.receipts = payload.kvitteringer (which contains an array of receipts), and deletes the payload afterwards.
`

module.exports = Node;