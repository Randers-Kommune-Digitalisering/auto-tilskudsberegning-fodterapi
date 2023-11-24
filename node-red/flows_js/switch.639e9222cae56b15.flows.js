const Node = {
  "id": "639e9222cae56b15",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "f0775df5510c6dd0",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "array",
      "vt": "array"
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
  "x": 1150,
  "y": 2040,
  "wires": [
    [
      "d8a4ee7e312de513"
    ],
    [
      "34124782c7bb8e9f"
    ]
  ],
  "_order": 639
}

module.exports = Node;