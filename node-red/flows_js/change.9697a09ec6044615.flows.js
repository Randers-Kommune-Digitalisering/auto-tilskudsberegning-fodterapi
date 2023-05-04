const Node = {
  "id": "9697a09ec6044615",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
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
      "7e5b15ec5045ca0c"
    ]
  ],
  "_order": 440
}

module.exports = Node;