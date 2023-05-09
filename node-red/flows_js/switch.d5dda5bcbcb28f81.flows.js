const Node = {
  "id": "d5dda5bcbcb28f81",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "",
  "property": "payload.webSettings.acceptances.login",
  "propertyType": "msg",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 910,
  "y": 460,
  "wires": [
    [
      "f1b774e14fa10452"
    ],
    [
      "2c36135f9e6b4609",
      "53d7186bbca94b8d"
    ]
  ],
  "_order": 165
}

module.exports = Node;