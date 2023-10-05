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
  "x": 920,
  "y": 180,
  "wires": [
    [
      "afeabb2862f63f1f"
    ]
  ],
  "_order": 341
}

module.exports = Node;