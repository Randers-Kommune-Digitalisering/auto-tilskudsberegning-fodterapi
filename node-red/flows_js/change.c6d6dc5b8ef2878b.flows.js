const Node = {
  "id": "c6d6dc5b8ef2878b",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "Set login to accepted",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.login",
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
      "t": "delete",
      "p": "payload.workletUser",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.workletPass",
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
      "abb73011a817205a"
    ]
  ],
  "_order": 418
}

module.exports = Node;