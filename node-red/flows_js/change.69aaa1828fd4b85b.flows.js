const Node = {
  "id": "69aaa1828fd4b85b",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.login",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.rules",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "payload.webSettings.acceptances.grants",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings",
      "pt": "global",
      "to": "payload.webSettings",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 320,
  "wires": [
    [
      "ab622e75bfcfc759"
    ]
  ],
  "_order": 182
}

module.exports = Node;