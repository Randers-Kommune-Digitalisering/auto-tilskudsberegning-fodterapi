const Node = {
  "id": "d5e098f6bd51179b",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Set ActivePage",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::webSettings.state.activePage",
      "pt": "global",
      "to": "payload.page",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.webSettings.state.activePage",
      "pt": "msg",
      "to": "payload.page",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 140,
  "y": 560,
  "wires": [
    [
      "b51ae96408813a15"
    ]
  ],
  "_order": 162
}

module.exports = Node;