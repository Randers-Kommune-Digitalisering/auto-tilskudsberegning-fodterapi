const Node = {
  "id": "ee6d9820182213e5",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "navBar items",
  "rules": [
    {
      "t": "set",
      "p": "webElements.navBar.items",
      "pt": "msg",
      "to": "[{\"title\":\"Start\",\"url\":\"start\"},{\"title\":\"Loginoplysninger\",\"url\":\"login\"},{\"title\":\"Forretningsregler\",\"url\":\"rules\"},{\"title\":\"Tilskudssatser\",\"url\":\"grants\"},{\"title\":\"Kør robot\",\"url\":\"startrun\"}]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 460,
  "wires": [
    [
      "77b4617b92c3a744"
    ]
  ],
  "_order": 355
}

module.exports = Node;