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
      "t": "eq",
      "v": "run",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "login",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "rules",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "grants",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 6,
  "x": 230,
  "y": 660,
  "wires": [
    [
      "0d18a8e83136d09a"
    ],
    [
      "50617191eb70b8cf"
    ],
    [
      "ccc6856c86ac35aa"
    ],
    [
      "952315832f18cf2e"
    ],
    [
      "2e3668a1060fe86a"
    ],
    [
      "b307be185f26686f"
    ]
  ],
  "_order": 354
}

module.exports = Node;