const Node = {
  "id": "d64936a739a436db",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Check last ping",
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
      "p": "diff",
      "pt": "msg",
      "to": "now - payload.webSettings.currentSession.lastPingMillis",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 180,
  "y": 300,
  "wires": [
    [
      "b50802089303913c"
    ]
  ],
  "_order": 144
}

module.exports = Node;