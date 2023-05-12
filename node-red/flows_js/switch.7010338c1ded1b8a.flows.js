const Node = {
  "id": "7010338c1ded1b8a",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "Data exists?",
  "property": "payload.tempDataArray",
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
  "x": 1030,
  "y": 140,
  "wires": [
    [
      "b07e0dfc01e164a0"
    ],
    [
      "7e1f73ec1d40cafe"
    ]
  ],
  "_order": 213
}

module.exports = Node;