const Node = {
  "id": "cde9e5d83ad62f78",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "name": "startDate < endDate?",
  "property": "(payload.startDate ~> $toMillis(\"[Y0001]-[M01]-[D01]\"))\t<=\t(payload.endDate ~> $toMillis(\"[Y0001]-[M01]-[D01]\"))",
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
  "x": 760,
  "y": 660,
  "wires": [
    [],
    [
      "778cbbfaf654737e"
    ]
  ],
  "_order": 672
}

module.exports = Node;