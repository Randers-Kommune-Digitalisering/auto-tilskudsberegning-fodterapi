const Node = {
  "id": "ff453a59f2b2253f",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "set page title",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageTitle",
      "pt": "msg",
      "to": "Kørselshistorik",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1590,
  "y": 1020,
  "wires": [
    [
      "afc6fa2bb250f63c"
    ]
  ],
  "_order": 230
}

module.exports = Node;