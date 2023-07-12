const Node = {
  "id": "f03ed296e7105d6b",
  "type": "switch",
  "z": "db94b4c117de2f6a",
  "name": "",
  "property": "#:(storeInFile)::grants",
  "propertyType": "global",
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
  "x": 410,
  "y": 400,
  "wires": [
    [
      "3765a5087cddf301"
    ],
    [
      "6aea2a69085ab1fc"
    ]
  ],
  "_order": 183
}

module.exports = Node;