const Node = {
  "id": "698e2e606a74f2c4",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "name": "",
  "property": "payload.requestType",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "getPageContent",
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
      "v": "finalize",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "getPublicKey",
      "vt": "str"
    }
  ],
  "checkall": "false",
  "repair": false,
  "outputs": 6,
  "x": 110,
  "y": 1360,
  "wires": [
    [
      "44922854196c3e51"
    ],
    [
      "0d73a26952f54d44"
    ],
    [
      "9697a09ec6044615"
    ],
    [
      "b1bb81c862ef6008"
    ],
    [
      "d78f10d6944b0f6e"
    ],
    [
      "3e3a2119b6ce7876"
    ]
  ],
  "_order": 429
}

module.exports = Node;