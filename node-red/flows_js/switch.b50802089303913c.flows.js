const Node = {
  "id": "b50802089303913c",
  "type": "switch",
  "z": "43652557380ac3f3",
  "g": "55635bddfbbcf6e4",
  "name": "",
  "property": "diff",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gt",
      "v": "#:(storeInFile)::webSettings.settings.idleTimeout",
      "vt": "global"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 290,
  "y": 1480,
  "wires": [
    [
      "69aaa1828fd4b85b"
    ],
    [
      "ab622e75bfcfc759"
    ]
  ],
  "_order": 301
}

module.exports = Node;