const Node = {
  "id": "cc9a7d4eee4c1fee",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "8c06b11e392189b4",
  "name": "set receipts and isRunning",
  "rules": [
    {
      "t": "set",
      "p": "webData.citizens-actions",
      "pt": "global",
      "to": "payload",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.citizens-noactions",
      "pt": "global",
      "to": "errors",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "delete",
      "p": "errors",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.isRunning",
      "pt": "global",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "webSettings.state.isBeingProcessed",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1240,
  "y": 1020,
  "wires": [
    [
      "71e92ac842a9732a"
    ]
  ],
  "_order": 448
}

module.exports = Node;