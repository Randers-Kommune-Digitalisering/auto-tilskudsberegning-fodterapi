const Node = {
  "id": "5ba692fce5d7e41b",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "0ec27cd93fba954f",
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
  "x": 1900,
  "y": 220,
  "wires": [
    [
      "874f40dffb67b0ef"
    ]
  ],
  "_order": 568
}

module.exports = Node;