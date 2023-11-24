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
      "t": "eq",
      "v": "receipts",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "help",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 8,
  "x": 230,
  "y": 480,
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
      "409d4850901a04ab"
    ],
    [
      "4641ad1f3fe75577"
    ],
    [
      "b307be185f26686f"
    ]
  ],
  "_order": 224
}

module.exports = Node;