const Node = {
  "id": "30f14b6f815a98ef",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "c6e3f804080c4f10",
  "name": "Send status",
  "rules": [
    {
      "t": "set",
      "p": "message",
      "pt": "msg",
      "to": "\"Henter persondata fra KP ... \" & percentage & \"%\"",
      "tot": "jsonata"
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
  "x": 1490,
  "y": 1540,
  "wires": [
    [
      "181615f06b564d1e"
    ]
  ],
  "_order": 658
}

module.exports = Node;