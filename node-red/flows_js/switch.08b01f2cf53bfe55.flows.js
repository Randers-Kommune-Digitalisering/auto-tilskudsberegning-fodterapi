const Node = {
  "id": "08b01f2cf53bfe55",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "name": "Findes \\n seneste kørsel?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 240,
  "y": 580,
  "wires": [
    [
      "74900ec3915e8773"
    ],
    [
      "9b18f59ef273e1e5"
    ]
  ],
  "_order": 662
}

module.exports = Node;