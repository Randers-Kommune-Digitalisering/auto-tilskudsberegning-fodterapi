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
      "to": "payload.data.toAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.login",
      "pt": "msg",
      "to": "payload.data.toAccept",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.workletCreds.workletUser",
      "pt": "global",
      "to": "payload.data.workletUser",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.workletCreds.workletPass",
      "pt": "global",
      "to": "payload.data.workletPass",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.dqCreds.dqUser",
      "pt": "global",
      "to": "payload.data.dqUser",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "webData.dqCreds.dqPass",
      "pt": "global",
      "to": "payload.data.dqPass",
      "tot": "msg",
      "dc": true
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
      "25799a4501f2e643"
    ]
  ],
  "_order": 439
}

module.exports = Node;