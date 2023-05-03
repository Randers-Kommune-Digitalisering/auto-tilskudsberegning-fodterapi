const Node = {
  "id": "357f74e2631da4c9",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "",
  "property": "payload.page",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "view-receipts",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "view-nograntreceipts",
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
      "v": "run",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "finalized",
      "vt": "str"
    },
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
  "outputs": 9,
  "x": 350,
  "y": 560,
  "wires": [
    [
      "13e976910d5e9707"
    ],
    [
      "5ab143a5c04fb163"
    ],
    [
      "d69d99eee8adcbf6"
    ],
    [
      "b24facdd74fa8b50"
    ],
    [
      "16bf0e6580aaf246"
    ],
    [
      "8b06ecbd2e4c4ecf"
    ],
    [
      "381970c176b042aa"
    ],
    [
      "c02e24bfe2197802"
    ],
    [
      "7e1f73ec1d40cafe"
    ]
  ],
  "_order": 141
}

module.exports = Node;