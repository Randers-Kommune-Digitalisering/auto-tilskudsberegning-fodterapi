const Node = {
  "id": "6f70a9263a101b22",
  "type": "switch",
  "z": "8ea344595d9a442a",
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
  "x": 410,
  "y": 1020,
  "wires": [
    [
      "96eacaac34db6202"
    ],
    [
      "f462cfb8de682697"
    ]
  ],
  "_order": 334
}

module.exports = Node;