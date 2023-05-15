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
  "x": 90,
  "y": 520,
  "wires": [
    [
      "70fb91ddec980afe"
    ],
    [
      "14f03be866dc4bec"
    ]
  ],
  "_order": 488
}

module.exports = Node;