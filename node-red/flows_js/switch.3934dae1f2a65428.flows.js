const Node = {
  "id": "3934dae1f2a65428",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "dd8bf1dc973547ed",
  "name": "Tom?",
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
  "x": 190,
  "y": 1500,
  "wires": [
    [
      "2035a8a2bc6a42fe"
    ],
    [
      "ab1b901746eee10d"
    ]
  ],
  "_order": 839
}

module.exports = Node;