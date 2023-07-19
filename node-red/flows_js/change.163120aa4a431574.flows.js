const Node = {
  "id": "163120aa4a431574",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "set page title",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageTitle",
      "pt": "msg",
      "to": "Kørsel afsluttet",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1590,
  "y": 880,
  "wires": [
    [
      "afc6fa2bb250f63c"
    ]
  ],
  "_order": 302
}

module.exports = Node;