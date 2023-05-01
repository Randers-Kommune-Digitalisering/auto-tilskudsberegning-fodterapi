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
  "x": 330,
  "y": 640,
  "wires": [
    [
      "590ea89e490dce35"
    ],
    [
      "6aea2a69085ab1fc"
    ]
  ],
  "_order": 194
}

module.exports = Node;