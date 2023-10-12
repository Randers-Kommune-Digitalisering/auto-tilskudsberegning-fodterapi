const Node = {
  "id": "d69d99eee8adcbf6",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "loginToAccept?",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageElements.loginToAccept",
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
  "x": 500,
  "y": 2480,
  "wires": [
    [
      "d5dda5bcbcb28f81"
    ]
  ],
  "_order": 285
}

module.exports = Node;