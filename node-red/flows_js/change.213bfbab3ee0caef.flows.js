const Node = {
  "id": "213bfbab3ee0caef",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Redirect + runButton",
  "rules": [
    {
      "t": "set",
      "p": "webElements.redirect",
      "pt": "msg",
      "to": "$globalContext(\"webSettings\").state.isRunning ?\t    { \"url\": \"start\" } :\t$globalContext(\"webSettings.acceptances.login\") = false ?\t    { \"url\": \"login\" } :\t$globalContext(\"webSettings.acceptances.rules\") = false ?\t    { \"url\": \"rules\" } :\t$globalContext(\"webSettings.acceptances.grants\") = false ?\t    { \"url\": \"grants\" }",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "webElements.runButton",
      "pt": "msg",
      "to": "{\t    \"disabled\": $globalContext(\"webSettings\").state.isRunning ? \"disabled\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 300,
  "y": 1720,
  "wires": [
    [
      "6415bf663d93de4e"
    ]
  ],
  "_order": 402
}

module.exports = Node;