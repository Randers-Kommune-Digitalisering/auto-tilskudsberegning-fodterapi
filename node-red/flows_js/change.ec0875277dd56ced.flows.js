const Node = {
  "id": "ec0875277dd56ced",
  "type": "change",
  "z": "43652557380ac3f3",
  "name": "set page title",
  "rules": [
    {
      "t": "set",
      "p": "payload.pageTitle",
      "pt": "msg",
      "to": "Forretningsregler",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1670,
  "y": 560,
  "wires": [
    [
      "afc6fa2bb250f63c"
    ]
  ],
  "_order": 150
}

module.exports = Node;