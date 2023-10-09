const Node = {
  "id": "ca1512ac46ac7b9a",
  "type": "change",
  "z": "43652557380ac3f3",
  "g": "64ba453bbb3e6616",
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
      "to": "webSettings.currentSession.lastPingMillis",
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
  "x": 300,
  "y": 80,
  "wires": [
    [
      "c38a05895faed5f5"
    ]
  ],
  "_order": 340
}

module.exports = Node;