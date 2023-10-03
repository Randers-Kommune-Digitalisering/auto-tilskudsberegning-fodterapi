const Node = {
  "id": "1434910e39a4624d",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "navBar initialization",
  "rules": [
    {
      "t": "set",
      "p": "webElements.navBar",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "webElements.navBar.items",
      "pt": "msg",
      "to": "[]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 460,
  "wires": [
    [
      "ee6d9820182213e5"
    ]
  ],
  "_order": 358
}

module.exports = Node;