const Node = {
  "id": "5ab143a5c04fb163",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Get citizens-noactions",
  "rules": [
    {
      "t": "set",
      "p": "payload.tempDataArray",
      "pt": "msg",
      "to": "webData.citizens-noactions",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 1500,
  "wires": [
    [
      "7010338c1ded1b8a"
    ]
  ],
  "_order": 330
}

module.exports = Node;