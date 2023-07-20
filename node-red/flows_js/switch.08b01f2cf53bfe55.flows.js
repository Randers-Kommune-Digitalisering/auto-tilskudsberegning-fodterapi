const Node = {
  "id": "08b01f2cf53bfe55",
  "type": "switch",
  "z": "fd98a6615193936d",
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
  "x": 300,
  "y": 1080,
  "wires": [
    [
      "4be3c7a4e52b0559"
    ],
    [
      "9b18f59ef273e1e5"
    ]
  ],
  "_order": 389
}

module.exports = Node;