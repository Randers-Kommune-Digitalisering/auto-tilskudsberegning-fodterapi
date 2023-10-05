const Node = {
  "id": "f34ae30211c58e5f",
  "type": "switch",
  "z": "43652557380ac3f3",
  "g": "64ba453bbb3e6616",
  "name": "",
  "property": "diff",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gt",
      "v": "webSettings.settings.idleTimeout",
      "vt": "global"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 430,
  "y": 140,
  "wires": [
    [
      "bf8251601ee743e2"
    ],
    [
      "86eb6019517b9ed1"
    ]
  ],
  "_order": 336
}

module.exports = Node;