const Node = {
  "id": "2438dedcb2b1f351",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "Set login to accepted + populate webData with login credentials",
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
  "x": 990,
  "y": 780,
  "wires": [
    [
      "0219fed7920fde2c"
    ]
  ],
  "_order": 712
}

module.exports = Node;