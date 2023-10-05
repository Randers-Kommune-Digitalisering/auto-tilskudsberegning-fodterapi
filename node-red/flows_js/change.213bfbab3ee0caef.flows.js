const Node = {
  "id": "213bfbab3ee0caef",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "webElements.redirect",
      "pt": "msg",
      "to": "$globalContext(\"webSettings.acceptances.login\") = false ?\t    { \"url\": \"login\" } :\t$globalContext(\"webSettings.acceptances.rules\") = false ?\t    { \"url\": \"rules\" } :\t$globalContext(\"webSettings.acceptances.grants\") = false ?\t    { \"url\": \"grants\" }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 1900,
  "wires": [
    [
      "6415bf663d93de4e"
    ]
  ],
  "_order": 402
}

module.exports = Node;