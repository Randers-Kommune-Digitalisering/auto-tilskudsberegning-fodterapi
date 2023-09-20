const Node = {
  "id": "cde9e5d83ad62f78",
  "type": "switch",
  "z": "fd98a6615193936d",
  "name": "startDate < endDate?",
  "property": "(newRun.startDate ~> $toMillis(\"[Y0001]-[M01]-[D01]\"))\t<=\t(newRun.endDate ~> $toMillis(\"[Y0001]-[M01]-[D01]\"))",
  "propertyType": "jsonata",
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
  "x": 820,
  "y": 1160,
  "wires": [
    [
      "2e4fdfaccc3fae91"
    ],
    [
      "778cbbfaf654737e"
    ]
  ],
  "_order": 396
}

module.exports = Node;