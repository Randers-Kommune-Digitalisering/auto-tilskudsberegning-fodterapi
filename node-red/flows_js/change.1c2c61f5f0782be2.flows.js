const Node = {
  "id": "1c2c61f5f0782be2",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "287b33b8879cbbbc",
  "name": "Clean msg",
  "rules": [
    {
      "t": "delete",
      "p": "rules",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "citizens",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "receipts",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1590,
  "y": 2020,
  "wires": [
    [
      "6a807a12e672b751"
    ]
  ],
  "_order": 399
}

module.exports = Node;