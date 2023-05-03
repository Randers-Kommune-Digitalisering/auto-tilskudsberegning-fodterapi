const Node = {
  "id": "801ba8048f457e32",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "31b5ea0c53a9c4fb",
  "name": "Set rules to accepted",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.acceptances.rules",
      "pt": "global",
      "to": "payload.toAccept",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.rules",
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
  "y": 600,
  "wires": [
    [
      "ec82ecfe41364ced"
    ]
  ],
  "_order": 419
}

module.exports = Node;