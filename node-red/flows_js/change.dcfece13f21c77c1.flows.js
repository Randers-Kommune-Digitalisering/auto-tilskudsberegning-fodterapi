const Node = {
  "id": "dcfece13f21c77c1",
  "type": "change",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "WorkLet login",
  "rules": [
    {
      "t": "set",
      "p": "workletUser",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "workletPass",
      "pt": "msg",
      "to": "",
      "tot": "str",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 560,
  "wires": [
    [
      "86530a1561b05ae7"
    ]
  ],
  "_order": 763
}

module.exports = Node;