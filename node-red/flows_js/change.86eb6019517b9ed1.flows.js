const Node = {
  "id": "86eb6019517b9ed1",
  "type": "change",
  "z": "43652557380ac3f3",
  "g": "64ba453bbb3e6616",
  "name": "update ping",
  "rules": [
    {
      "t": "set",
      "p": "webSettings.currentSession.lastPingMillis",
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
  "x": 1790,
  "y": 160,
  "wires": [
    []
  ],
  "_order": 414
}

module.exports = Node;