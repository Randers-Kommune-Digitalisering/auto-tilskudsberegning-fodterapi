const Node = {
  "id": "d5e098f6bd51179b",
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
  "x": 210,
  "y": 320,
  "wires": [
    [
      "b51ae96408813a15"
    ]
  ],
  "_order": 172
}

module.exports = Node;