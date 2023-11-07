const Node = {
  "id": "6ae4d558ad8907c7",
  "type": "switch",
  "z": "5b815921c9650f17",
  "name": "Loop complete?",
  "property": "count",
  "propertyType": "msg",
  "rules": [
    {
      "t": "lt",
      "v": "(data ~> $count()) -1",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 560,
  "y": 400,
  "wires": [
    [
      "1514b262b25ba298"
    ],
    [
      "952a75481b39dd63",
      "2f755bb1629f6e4c"
    ]
  ],
  "_order": 750
}

module.exports = Node;