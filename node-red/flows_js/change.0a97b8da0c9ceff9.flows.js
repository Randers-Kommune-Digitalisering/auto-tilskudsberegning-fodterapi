const Node = {
  "id": "0a97b8da0c9ceff9",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "0e177132df886f4e",
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
      "408b2b0cf0a40d41"
    ]
  ],
  "_order": 439
}

module.exports = Node;