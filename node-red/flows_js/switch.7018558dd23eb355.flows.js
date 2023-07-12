const Node = {
  "id": "7018558dd23eb355",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "",
  "property": "$count( payload.kvitteringer )",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gt",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 810,
  "y": 760,
  "wires": [
    [
      "6558b47eb74e6c0c"
    ],
    [
      "35a80d61fabc8e31"
    ]
  ],
  "_order": 437
}

module.exports = Node;