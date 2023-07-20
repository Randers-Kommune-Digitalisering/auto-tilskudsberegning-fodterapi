const Node = {
  "id": "9d7b1b3cbf73f007",
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
  "y": 480,
  "wires": [
    [
      "d98bc2510fb3c5fc"
    ],
    [
      "1890238cf3364f46"
    ]
  ],
  "_order": 422
}

module.exports = Node;