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
      "to": "webData.workletCreds.workletUser",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "workletPass",
      "pt": "msg",
      "to": "webData.workletCreds.workletPass",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 820,
  "wires": [
    [
      "86530a1561b05ae7"
    ]
  ],
  "_order": 430
}

module.exports = Node;