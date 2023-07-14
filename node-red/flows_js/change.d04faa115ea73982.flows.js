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
  "x": 380,
  "y": 760,
  "wires": [
    [
      "144d6812d5213472"
    ]
  ],
  "_order": 429
}

module.exports = Node;