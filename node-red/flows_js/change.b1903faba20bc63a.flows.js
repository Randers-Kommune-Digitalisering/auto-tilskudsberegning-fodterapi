const Node = {
  "id": "b1903faba20bc63a",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Set ActivePage = url",
  "rules": [
    {
      "t": "set",
      "p": "webSettings.state.activePage",
      "pt": "global",
      "to": "url",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 280,
  "y": 160,
  "wires": [
    [
      "f6143da7db4b2d73"
    ]
  ],
  "_order": 209
}

module.exports = Node;