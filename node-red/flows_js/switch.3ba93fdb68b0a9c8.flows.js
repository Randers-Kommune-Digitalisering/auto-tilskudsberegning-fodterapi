const Node = {
  "id": "3ba93fdb68b0a9c8",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "dcb33bd7556b5033",
  "name": "Login OK?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 470,
  "y": 860,
  "wires": [
    [
      "d7717db45ed14676"
    ],
    [
      "bfecdb8ac081e8aa"
    ]
  ],
  "_order": 626
}

module.exports = Node;