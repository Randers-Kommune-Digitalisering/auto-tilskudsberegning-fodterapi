const Node = {
  "id": "b1903faba20bc63a",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Set ActivePage = payload.data.page",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.activePage",
      "pt": "global",
      "to": "payload.data.page",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 970,
  "y": 180,
  "wires": [
    [
      "afeabb2862f63f1f"
    ]
  ],
  "_order": 338
}

module.exports = Node;