const Node = {
  "id": "0f583d6bfaad7d0e",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "a95d2f4df03e969c",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "Henter persondata fra KP ...",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "update",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1550,
  "y": 720,
  "wires": [
    [
      "427c8a1a563502c8"
    ]
  ],
  "_order": 416
}

module.exports = Node;