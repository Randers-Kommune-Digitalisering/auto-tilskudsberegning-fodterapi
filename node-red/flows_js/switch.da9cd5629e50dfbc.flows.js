const Node = {
  "id": "da9cd5629e50dfbc",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "URL?",
  "property": "url",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "start",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 230,
  "y": 640,
  "wires": [
    [
      "58a4b00d2969e7cb"
    ],
    [
      "511e2168c221811e"
    ]
  ],
  "_order": 351
}

module.exports = Node;