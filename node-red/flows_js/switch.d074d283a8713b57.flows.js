const Node = {
  "id": "d074d283a8713b57",
  "type": "switch",
  "z": "db94b4c117de2f6a",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "false",
  "repair": false,
  "outputs": 2,
  "x": 210,
  "y": 100,
  "wires": [
    [
      "f7635cfda195117f"
    ],
    [
      "ff29c1cf4e1ad18a"
    ]
  ],
  "_order": 133
}

module.exports = Node;