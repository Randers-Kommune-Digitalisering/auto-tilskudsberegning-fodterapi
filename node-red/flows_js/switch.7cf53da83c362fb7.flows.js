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
  "y": 2020,
  "wires": [
    [
      "b03037604c18a279"
    ],
    [
      "567818feedc32810"
    ]
  ],
  "_order": 706
}

module.exports = Node;