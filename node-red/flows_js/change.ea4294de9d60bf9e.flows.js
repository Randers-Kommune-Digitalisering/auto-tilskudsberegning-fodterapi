const Node = {
  "id": "ea4294de9d60bf9e",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "ac8c86427665f81e",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Henter fakturadata fra WorkLet",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "value",
      "pt": "msg",
      "to": "percentage",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 650,
  "y": 1160,
  "wires": [
    [
      "e39a2c30c91df0a8"
    ]
  ]
}

module.exports = Node;