const Node = {
  "id": "805559d138018359",
  "type": "switch",
  "z": "43652557380ac3f3",
  "g": "55635bddfbbcf6e4",
  "name": "Is running?",
  "property": "#:(storeInFile)::webSettings.state.isRunning",
  "propertyType": "global",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 110,
  "y": 140,
  "wires": [
    [
      "d5e098f6bd51179b"
    ],
    [
      "b50802089303913c"
    ],
    [
      "b50802089303913c"
    ]
  ],
  "_order": 300
}

module.exports = Node;