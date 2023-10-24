const Node = {
  "id": "5ba692fce5d7e41b",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "name": "",
  "property": "payload.type",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "update",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1210,
  "y": 200,
  "wires": [
    [
      "874f40dffb67b0ef"
    ]
  ],
  "_order": 566
}

module.exports = Node;