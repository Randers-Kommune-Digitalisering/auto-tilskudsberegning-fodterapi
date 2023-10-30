const Node = {
  "id": "3bd0ac4edb7c8181",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "404b73d5fb6cfa91",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload.requestType",
      "pt": "msg",
      "to": "archive",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "webSettings.state.activePage",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1350,
  "y": 1460,
  "wires": [
    [
      "b0eab8ccef2caa5c"
    ]
  ],
  "_order": 647
}

module.exports = Node;