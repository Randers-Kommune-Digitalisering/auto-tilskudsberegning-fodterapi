const Node = {
  "id": "eae97dc11278dc8c",
  "type": "switch",
  "z": "db94b4c117de2f6a",
  "name": "",
  "property": "\"isRunning\" in ($globalContext(\"webSettings\").state ~> $keys())",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 410,
  "y": 140,
  "wires": [
    [
      "5aa3eb5b114e0403"
    ],
    [
      "88e4c1ff6d0333f9"
    ]
  ],
  "_order": 261
}

module.exports = Node;