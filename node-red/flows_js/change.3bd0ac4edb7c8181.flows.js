const Node = {
  "id": "3bd0ac4edb7c8181",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "404b73d5fb6cfa91",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
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
    },
    {
      "t": "set",
      "p": "payload.statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1450,
  "y": 1460,
  "wires": [
    [
      "e5908679bccd13f4"
    ]
  ],
  "_order": 653
}

module.exports = Node;