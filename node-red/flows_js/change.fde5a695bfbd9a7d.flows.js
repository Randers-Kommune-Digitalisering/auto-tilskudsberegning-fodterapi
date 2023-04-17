const Node = {
  "id": "fde5a695bfbd9a7d",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "380e5c7e0ea3778b",
  "name": "Clean MSG",
  "rules": [
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
      "p": "tilskudsInfo",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "filename",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "filePath",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "receipts",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "citizens",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "selectors",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "pupOutputs",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "rules",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 2340,
  "wires": [
    [
      "f5dbef72792b9011"
    ]
  ],
  "_order": 251
}

module.exports = Node;