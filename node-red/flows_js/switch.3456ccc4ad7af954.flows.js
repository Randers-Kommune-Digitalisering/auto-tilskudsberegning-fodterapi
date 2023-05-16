const Node = {
  "id": "3456ccc4ad7af954",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "80bf7be9c257b2b0",
  "name": "",
  "property": "payload.data.pageToAccept",
  "propertyType": "msg",
  "rules": [
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
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 450,
  "y": 860,
  "wires": [
    [
      "2438dedcb2b1f351"
    ],
    [
      "2ad7e6614253c6eb"
    ],
    [
      "b87d655f883c06e2"
    ]
  ],
  "_order": 436
}

module.exports = Node;