const Node = {
  "id": "ae78e3fc89996dac",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "set page title",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageTitle",
      "pt": "msg",
      "to": "Fakturaer",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "payload.tempData",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload.tempDataArray",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1670,
  "y": 1660,
  "wires": [
    [
      "afc6fa2bb250f63c"
    ]
  ],
  "_order": 265
}

module.exports = Node;