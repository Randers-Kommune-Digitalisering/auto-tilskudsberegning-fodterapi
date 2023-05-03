const Node = {
  "id": "40c9a409b68d13f1",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "0e177132df886f4e",
  "name": "Set isRunning = true",
  "rules": [
    {
      "t": "set",
      "p": "payload.webSettings.state.isRunning",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.isRunning",
      "pt": "global",
      "to": "payload.webSettings.state.isRunning",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "webData.startedRunThisInstance",
      "pt": "global",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 1020,
  "wires": [
    [
      "e53f459d609aac22"
    ]
  ],
  "_order": 446
}

module.exports = Node;