const Node = {
  "id": "6e25160476593670",
  "type": "switch",
  "z": "c28a486ea3e09387",
  "g": "0772648cf2b898d4",
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
      "59e078cd4489c0aa"
    ],
    [
      "415336a4f07090e6"
    ],
    [
      "40c9a409b68d13f1"
    ],
    [
      "6226138fabf9a3b8"
    ],
    [
      "f202f5cad72d049b"
    ]
  ],
  "_order": 408
}

module.exports = Node;