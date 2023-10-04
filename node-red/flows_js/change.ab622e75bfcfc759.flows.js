const Node = {
  "id": "ab622e75bfcfc759",
  "type": "change",
  "z": "43652557380ac3f3",
  "g": "55635bddfbbcf6e4",
  "name": "update ping",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.currentSession.lastPingMillis",
      "pt": "global",
      "to": "$millis()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 2180,
  "wires": [
    [
      "d5e098f6bd51179b"
    ]
  ],
  "_order": 289
}

module.exports = Node;