const Node = {
  "id": "c7471e96ad8de5e4",
  "type": "change",
  "z": "db94b4c117de2f6a",
  "name": "set webSettings.state.isRunning",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.isRunning",
      "pt": "global",
      "to": "$globalContext(\"webSettings.state.isRunning\", \"storeInFile\") = true ?\t$globalContext(\"webData.startedRunThisInstance\") : false",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 690,
  "y": 120,
  "wires": [
    [
      "bb96674ebd01af04"
    ]
  ],
  "_order": 163
}

module.exports = Node;