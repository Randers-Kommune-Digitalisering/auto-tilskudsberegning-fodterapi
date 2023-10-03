const Node = {
  "id": "b0b8bd30f6fdf461",
  "type": "switch",
  "z": "43652557380ac3f3",
  "name": "",
  "property": "payload.tempData.persondata.danmarkgruppe",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "null"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 1490,
  "y": 200,
  "wires": [
    [
      "1f72e5564103eca8"
    ],
    [
      "a1bf4b6b1875b569"
    ],
    [
      "5ed1981ab9c124de"
    ]
  ],
  "_order": 306
}

module.exports = Node;