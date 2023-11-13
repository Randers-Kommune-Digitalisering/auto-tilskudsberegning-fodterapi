const Node = {
  "id": "7cf53da83c362fb7",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "name": "Findes kørselshistorik?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 680,
  "y": 2120,
  "wires": [
    [
      "e7aeff08aafc7992"
    ],
    [
      "567818feedc32810"
    ]
  ],
  "_order": 732
}

module.exports = Node;