const Node = {
  "id": "c38a05895faed5f5",
  "type": "switch",
  "z": "43652557380ac3f3",
  "g": "64ba453bbb3e6616",
  "name": "Is running?",
  "property": "webSettings.state.isRunning",
  "propertyType": "global",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1390,
  "y": 160,
  "wires": [
    [
      "f34ae30211c58e5f"
    ],
    [
      "9996112f5d1ff96b"
    ]
  ],
  "_order": 277
}

module.exports = Node;