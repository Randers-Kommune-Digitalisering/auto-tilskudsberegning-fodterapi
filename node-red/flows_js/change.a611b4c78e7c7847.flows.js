const Node = {
  "id": "a611b4c78e7c7847",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "ee6f8b38b1f3ef2e",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Henter persondata fra KP",
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
      "to": "15 + percentage * 0.75",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 1640,
  "wires": [
    [
      "a42d12f6943cd3f8"
    ]
  ],
  "_order": 568
}

module.exports = Node;