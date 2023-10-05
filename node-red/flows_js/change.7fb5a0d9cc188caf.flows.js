const Node = {
  "id": "7fb5a0d9cc188caf",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "loginToAccept?",
  "rules": [
    {
      "t": "set",
      "p": "webElements.loginToAccept",
      "pt": "msg",
      "to": "($globalContext(\"webSettings\")).acceptances.login = true ? false : true",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 280,
  "y": 1440,
  "wires": [
    [
      "3ac7cd13993a1cf8"
    ]
  ],
  "_order": 363
}

module.exports = Node;