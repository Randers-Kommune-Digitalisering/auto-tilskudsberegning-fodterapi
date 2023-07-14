const Node = {
  "id": "c57f920c097e5ef1",
  "type": "switch",
  "z": "fd98a6615193936d",
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
  "x": 1010,
  "y": 180,
  "wires": [
    [
      "717470e10e915755"
    ],
    [
      "2119398d7ab636b2"
    ]
  ],
  "_order": 413
}

module.exports = Node;