const Node = {
  "id": "5935cece6c345653",
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
  "x": 1570,
  "y": 520,
  "wires": [
    [
      "8020507bdd5939ba"
    ],
    []
  ],
  "_order": 117
}

module.exports = Node;