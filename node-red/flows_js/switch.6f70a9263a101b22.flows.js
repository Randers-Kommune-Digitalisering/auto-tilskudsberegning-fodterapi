const Node = {
  "id": "6f70a9263a101b22",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "g": "9c4f3569ebca5f7b",
  "name": "",
  "property": "citizens",
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
  "x": 590,
  "y": 880,
  "wires": [
    [
      "bc99d7022f61a990"
    ],
    [
      "f462cfb8de682697"
    ]
  ],
  "_order": 330
}

module.exports = Node;