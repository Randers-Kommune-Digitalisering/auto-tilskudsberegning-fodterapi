const Node = {
  "id": "c0760fd1380190e5",
  "type": "switch",
  "z": "1260b784fb72ac25",
  "name": "Fejl?",
  "property": "error",
  "propertyType": "msg",
  "rules": [
    {
      "t": "null"
    },
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 990,
  "y": 120,
  "wires": [
    [
      "99e06525e77c4498"
    ],
    [
      "79d37fef2b4c14c1"
    ]
  ],
  "_order": 319
}

module.exports = Node;