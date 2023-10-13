const Node = {
  "id": "d7717db45ed14676",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "OK?",
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
  "x": 650,
  "y": 820,
  "wires": [
    [
      "eb0ffda14742d0d4"
    ],
    [
      "bfecdb8ac081e8aa"
    ]
  ],
  "_order": 798
}

module.exports = Node;