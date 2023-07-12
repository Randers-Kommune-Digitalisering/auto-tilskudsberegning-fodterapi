const Node = {
  "id": "40a2d9ad69e69c69",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "startDate < endDate?",
  "property": "(currentRun.startDate ~> $toMillis(\"[D01]/[M01]/[Y0001]\")) <= (currentRun.endDate ~> $toMillis(\"[D01]/[M01]/[Y0001]\"))",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1040,
  "y": 360,
  "wires": [
    [
      "0315b599de1a9914",
      "d3165df265c724dd"
    ],
    [
      "e14ffe4e7fa755d0"
    ]
  ],
  "_order": 496
}

module.exports = Node;