const Node = {
  "id": "13fd6673e6b6091c",
  "type": "switch",
  "z": "fd98a6615193936d",
  "name": "Kørsel uafsluttet?",
  "property": "payload.runFinalized",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "eq",
      "v": "1",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 810,
  "y": 1040,
  "wires": [
    [
      "a34ff3d6f2f655ef"
    ],
    [
      "9b18f59ef273e1e5"
    ]
  ],
  "_order": 346
}

module.exports = Node;