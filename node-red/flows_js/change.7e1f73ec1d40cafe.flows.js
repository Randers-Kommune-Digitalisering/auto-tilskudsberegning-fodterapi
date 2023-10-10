const Node = {
  "id": "7e1f73ec1d40cafe",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Set ActivePage",
  "rules": [
    {
      "t": "set",
      "p": "webSettings.state.activePage",
      "pt": "global",
      "to": "start",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.webSettings.state.activePage",
      "pt": "msg",
      "to": "start",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 3360,
  "wires": [
    [
      "c02e24bfe2197802"
    ]
  ],
  "_order": 280
}

module.exports = Node;