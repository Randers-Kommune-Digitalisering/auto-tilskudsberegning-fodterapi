const Node = {
  "id": "2438dedcb2b1f351",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set login to accepted",
  "rules": [
    {
      "t": "set",
      "p": "webSettings.acceptances.login",
      "pt": "global",
      "to": "payload.toAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.login",
      "pt": "msg",
      "to": "payload.toAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.workletCreds.workletUser",
      "pt": "global",
      "to": "payload.workletUser",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.workletCreds.workletPass",
      "pt": "global",
      "to": "payload.workletPass",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.dqCreds.dqUser",
      "pt": "global",
      "to": "payload.dqUser",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.dqCreds.dqPass",
      "pt": "global",
      "to": "payload.dqPass",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "delete",
      "p": "payload.workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.workletPass",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.dqUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.dqPass",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 500,
  "wires": [
    [
      "bab1c55322b4ffc1"
    ]
  ],
  "_order": 419
}

module.exports = Node;