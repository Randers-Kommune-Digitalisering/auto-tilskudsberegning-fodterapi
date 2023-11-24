const Node = {
  "id": "cc9a7d4eee4c1fee",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
  "name": "set receipts and isRunning",
  "rules": [
    {
      "t": "set",
      "p": "webSettings.state.isRunning",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1020,
  "y": 1260,
  "wires": [
    [
      "1d984c5c42fea062"
    ]
  ],
  "_order": 719
}

module.exports = Node;