const Node = {
  "id": "b07e0dfc01e164a0",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "Specific citizen?",
  "property": "payload.spec",
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
  "x": 1240,
  "y": 100,
  "wires": [
    [
      "7a64b3858edfdad8"
    ],
    [
      "93729e19de983eee"
    ]
  ],
  "_order": 221
}

module.exports = Node;