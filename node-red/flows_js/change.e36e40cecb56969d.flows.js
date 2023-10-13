const Node = {
  "id": "e36e40cecb56969d",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "set page title",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageTitle",
      "pt": "msg",
      "to": "Loginoplysninger",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1270,
  "y": 2480,
  "wires": [
    [
      "afc6fa2bb250f63c"
    ]
  ],
  "_order": 276
}

module.exports = Node;