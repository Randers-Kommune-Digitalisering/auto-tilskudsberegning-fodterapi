const Node = {
  "id": "6839897d12a405ac",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "",
  "property": "payload.webSettings.acceptances.grants",
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
  "y": 660,
  "wires": [
    [
      "08ae4c04ae16a403"
    ],
    [
      "04dafd05828f33bf"
    ]
  ],
  "_order": 135
}

module.exports = Node;