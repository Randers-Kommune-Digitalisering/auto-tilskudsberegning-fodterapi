const Node = {
  "id": "cf6d2b3350733b38",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Set page title",
  "rules": [
    {
      "t": "set",
      "p": "webElements.pageTitle",
      "pt": "msg",
      "to": "webElements.navBar.items[active = \"active\"].title",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 250,
  "y": 800,
  "wires": [
    [
      "e5c2d7fbb8ad50b2"
    ]
  ]
}

module.exports = Node;