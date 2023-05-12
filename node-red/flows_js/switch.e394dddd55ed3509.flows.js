const Node = {
  "id": "e394dddd55ed3509",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "63b598a9c0a41f91",
  "name": "",
  "property": "payload.data",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 270,
  "y": 480,
  "wires": [
    [
      "70fb91ddec980afe"
    ],
    [
      "b03981321f760769"
    ]
  ],
  "_order": 487
}

module.exports = Node;