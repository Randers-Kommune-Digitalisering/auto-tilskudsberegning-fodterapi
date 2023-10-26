const Node = {
  "id": "a772b6cda41e3171",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "272cd367299d7d94",
  "name": "",
  "property": "$millis()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gt",
      "v": "$flowContext(\"metricsLoaded\") ~> $exists() ? $flowContext(\"metricsLoaded\")  + 300000 : 0",
      "vt": "jsonata"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 850,
  "y": 180,
  "wires": [
    [
      "cd9e25a8efa07281"
    ]
  ],
  "_order": 694
}

module.exports = Node;