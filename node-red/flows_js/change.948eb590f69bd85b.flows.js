const Node = {
  "id": "948eb590f69bd85b",
  "type": "change",
  "z": "c28a486ea3e09387",
  "g": "e4e7a254403521e9",
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
  "x": 1570,
  "y": 1240,
  "wires": [
    [
      "b3ecd3ad79094172"
    ]
  ],
  "_order": 459
}

module.exports = Node;