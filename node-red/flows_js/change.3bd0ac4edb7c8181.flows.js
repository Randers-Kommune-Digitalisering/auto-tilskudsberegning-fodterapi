const Node = {
  "id": "3bd0ac4edb7c8181",
  "type": "change",
  "z": "5bb3204aef17c104",
  "g": "63492761a85db852",
  "name": "Set response",
  "rules": [
    {
      "t": "delete",
      "p": "payload.tempDataArray",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.tempData",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.tempDataLength",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "payload.page",
      "pt": "msg",
      "to": "payload.webSettings.state.activePage",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1430,
  "y": 1520,
  "wires": [
    [
      "b0eab8ccef2caa5c"
    ]
  ],
  "_order": 795
}

module.exports = Node;