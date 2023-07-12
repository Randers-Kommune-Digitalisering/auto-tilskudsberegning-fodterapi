const Node = {
  "id": "13fd6673e6b6091c",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "name": "Kørsel uafsluttet?",
  "property": "payload.isFinalized",
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
  "x": 750,
  "y": 560,
  "wires": [
    [
      "89de866f66737f84"
    ],
    [
      "9b18f59ef273e1e5"
    ]
  ],
  "_order": 668
}

module.exports = Node;