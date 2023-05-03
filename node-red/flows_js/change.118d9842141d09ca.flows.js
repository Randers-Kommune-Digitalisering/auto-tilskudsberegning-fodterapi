const Node = {
  "id": "118d9842141d09ca",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "Set grants to accepted",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.grants",
      "pt": "global",
      "to": "payload.toAccept",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.grants",
      "pt": "msg",
      "to": "payload.toAccept",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 780,
  "wires": [
    [
      "f6abba6df8ed7611"
    ]
  ],
  "_order": 440
}

module.exports = Node;