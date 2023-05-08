const Node = {
  "id": "698e2e606a74f2c4",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "63b598a9c0a41f91",
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
    }
  ],
  "checkall": "false",
  "repair": false,
  "outputs": 5,
  "x": 250,
  "y": 720,
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
    ]
  ],
  "_order": 400
}

module.exports = Node;