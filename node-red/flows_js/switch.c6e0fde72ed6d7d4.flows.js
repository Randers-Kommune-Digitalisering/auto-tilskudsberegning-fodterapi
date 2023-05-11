const Node = {
  "id": "c6e0fde72ed6d7d4",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "63b598a9c0a41f91",
  "name": "",
  "property": "payload.requestType",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "encryptedRequest",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 110,
  "y": 500,
  "wires": [
    [
      "e394dddd55ed3509"
    ],
    [
      "14f03be866dc4bec"
    ]
  ],
  "_order": 485
}

module.exports = Node;