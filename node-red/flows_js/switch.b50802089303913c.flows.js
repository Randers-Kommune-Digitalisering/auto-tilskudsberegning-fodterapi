const Node = {
  "id": "b50802089303913c",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "",
  "property": "diff",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gt",
      "v": "payload.webSettings.settings.idleTimeout",
      "vt": "msg"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 210,
  "y": 340,
  "wires": [
    [
      "69aaa1828fd4b85b"
    ],
    [
      "ab622e75bfcfc759"
    ]
  ],
  "_order": 151
}

module.exports = Node;