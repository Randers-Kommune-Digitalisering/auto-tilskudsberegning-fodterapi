const Node = {
  "id": "d04faa115ea73982",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "WorkLet login",
  "rules": [
    {
      "t": "set",
      "p": "workletUser",
      "pt": "msg",
      "to": "webData.workletCreds.workletUser",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "workletPass",
      "pt": "msg",
      "to": "webData.workletCreds.workletPass",
      "tot": "global",
      "dc": true
    },
    {
      "t": "delete",
      "p": "webData.workletCreds.workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "webData.workletCreds.workletPass",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 520,
  "wires": [
    [
      "28d8ac05e7f0f65f"
    ]
  ],
  "_order": 262
}

module.exports = Node;