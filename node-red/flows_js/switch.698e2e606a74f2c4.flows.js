const Node = {
  "id": "698e2e606a74f2c4",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "name": "POST",
  "property": "payload.requestType",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "getMetrics",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "acceptPage",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "startRun",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "archive",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "completeRun",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "getPublicKey",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "getRules",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "getRunHistory",
      "vt": "str"
    }
  ],
  "checkall": "false",
  "repair": false,
  "outputs": 8,
  "x": 150,
  "y": 1360,
  "wires": [
    [
      "46db975f6e21fe45",
      "25a1be92472986e8"
    ],
    [
      "0d73a26952f54d44"
    ],
    [
      "9697a09ec6044615"
    ],
    [
      "4a2b1e892f7e12ad"
    ],
    [
      "ca18c83d5b18ee35"
    ],
    [
      "3e3a2119b6ce7876"
    ],
    [
      "2257035b57b40ae8"
    ],
    [
      "5cdb9daf21399b9d"
    ]
  ]
}

module.exports = Node;