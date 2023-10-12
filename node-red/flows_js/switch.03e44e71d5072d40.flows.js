const Node = {
  "id": "03e44e71d5072d40",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Retry?",
  "property": "workletRetryCount",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lte",
      "v": "3",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 990,
  "y": 940,
  "wires": [
    [
      "8bd4c55a7ab8fe8c"
    ]
  ],
  "_order": 793
}

module.exports = Node;