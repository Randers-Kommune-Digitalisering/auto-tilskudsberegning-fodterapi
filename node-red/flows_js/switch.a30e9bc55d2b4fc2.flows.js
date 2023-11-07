const Node = {
  "id": "a30e9bc55d2b4fc2",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "404b73d5fb6cfa91",
  "name": "",
  "property": "parts ~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1270,
  "y": 1460,
  "wires": [
    [
      "b64c23b2e555b5fe"
    ],
    [
      "3bd0ac4edb7c8181"
    ]
  ],
  "_order": 736
}

module.exports = Node;