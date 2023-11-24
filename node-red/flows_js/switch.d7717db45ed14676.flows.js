const Node = {
  "id": "d7717db45ed14676",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Count \\n > 0?",
  "property": "$count( payload.kvitteringer )",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gt",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 650,
  "y": 840,
  "wires": [
    [
      "eb0ffda14742d0d4"
    ],
    [
      "79fe8a230380ef19"
    ],
    [
      "bfecdb8ac081e8aa"
    ]
  ],
  "_order": 458
}

module.exports = Node;