const Node = {
  "id": "77b4617b92c3a744",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "Highlight active navBar item",
  "rules": [
    {
      "t": "set",
      "p": "webElements.navBar.items",
      "pt": "msg",
      "to": "webElements.navBar.items ~> | $ | {\t\t    /* Set key \"active\" to \"active\" (css class name)\t       if browser url = navItem url */\t       \t    \"active\": $$.url = url ? \"active\"\t\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 460,
  "wires": [
    [
      "680fda90ed11473f"
    ]
  ],
  "_order": 345
}

module.exports = Node;