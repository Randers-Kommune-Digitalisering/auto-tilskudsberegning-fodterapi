const Node = {
  "id": "cb4ea3ccf7541c86",
  "type": "switch",
  "z": "41d1b8798efe7e15",
  "name": "",
  "property": "isWebCommand",
  "propertyType": "flow",
  "rules": [
    {
      "t": "eq",
      "v": "true",
      "vt": "jsonata"
    },
    {
      "t": "eq",
      "v": "false",
      "vt": "jsonata"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 890,
  "y": 640,
  "wires": [
    [
      "69738f2e4dcc6f63"
    ],
    []
  ]
}

module.exports = Node;