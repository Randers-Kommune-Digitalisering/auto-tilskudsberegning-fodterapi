const Node = {
  "id": "f502f486c21ec054",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "272cd367299d7d94",
  "name": "",
  "property": "payload.data.page",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "metrics",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 470,
  "y": 140,
  "wires": [
    [
      "3a1909c9e2eb5089"
    ],
    [
      "98509afbebc59b87"
    ]
  ],
  "_order": 703
}

module.exports = Node;