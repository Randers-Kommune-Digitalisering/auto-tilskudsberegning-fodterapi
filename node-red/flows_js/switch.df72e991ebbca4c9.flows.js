const Node = {
  "id": "df72e991ebbca4c9",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "404b73d5fb6cfa91",
  "name": "",
  "property": "receiptId ~> $contains(\",\")",
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
  "x": 630,
  "y": 1400,
  "wires": [
    [
      "358c9155bb453982"
    ],
    [
      "e5bc1f6e7cbe963d"
    ]
  ]
}

module.exports = Node;