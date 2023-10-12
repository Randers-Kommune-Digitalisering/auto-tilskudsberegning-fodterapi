const Node = {
  "id": "6f7370df29e3187f",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "",
  "property": "req.query.cat",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nnull"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 250,
  "y": 1860,
  "wires": [
    [
      "bc7217d0ea980e39"
    ],
    [
      "b30d98950182d761"
    ]
  ],
  "_order": 410
}

module.exports = Node;