const Node = {
  "id": "d64936a739a436db",
  "type": "change",
  "z": "43652557380ac3f3",
  "g": "55635bddfbbcf6e4",
  "name": "Calc time diff since last ping",
  "rules": [
    {
      "t": "set",
      "p": "now",
      "pt": "msg",
      "to": "$millis()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "last",
      "pt": "msg",
      "to": "#:(storeInFile)::webSettings.currentSession.lastPingMillis",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "diff",
      "pt": "msg",
      "to": "now - last",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 60,
  "wires": [
    [
      "805559d138018359"
    ]
  ],
  "_order": 191
}

module.exports = Node;