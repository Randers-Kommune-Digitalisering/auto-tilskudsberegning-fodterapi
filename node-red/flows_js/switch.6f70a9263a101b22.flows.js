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
  "x": 350,
  "y": 1400,
  "wires": [
    [
      "efcb46cbef4c2fda"
    ],
    [
      "f462cfb8de682697",
      "22fb9c39adc100d3"
    ]
  ],
  "_order": 586
}

module.exports = Node;