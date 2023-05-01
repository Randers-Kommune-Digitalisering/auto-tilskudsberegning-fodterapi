const Node = {
  "id": "d68baf48942491dd",
  "type": "switch",
  "z": "41d1b8798efe7e15",
  "name": "browser == null?",
  "property": "pupController.browser",
  "propertyType": "msg",
  "rules": [
    {
      "t": "null"
    },
    {
      "t": "nnull"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 910,
  "y": 340,
  "wires": [
    [
      "274738f45a0d5d5a"
    ],
    [
      "1a32f920705bb1bc"
    ]
  ],
  "_order": 74
}

module.exports = Node;