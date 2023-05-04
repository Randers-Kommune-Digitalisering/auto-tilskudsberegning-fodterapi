const Node = {
  "id": "ab622e75bfcfc759",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "set lastPingMillis",
  "rules": [
    {
      "t": "set",
      "p": "payload.webSettings.currentSession.lastPingMillis",
      "pt": "msg",
      "to": "$millis()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.currentSession.lastPingMillis",
      "pt": "global",
      "to": "payload.webSettings.currentSession.lastPingMillis",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 360,
  "wires": [
    [
      "d5e098f6bd51179b"
    ]
  ],
  "_order": 180
}

module.exports = Node;