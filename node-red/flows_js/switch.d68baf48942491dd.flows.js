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
  "x": 710,
  "y": 440,
  "wires": [
    [
      "274738f45a0d5d5a"
    ],
    [
      "adb383a374c3a116"
    ]
  ],
  "_order": 103
}

module.exports = Node;