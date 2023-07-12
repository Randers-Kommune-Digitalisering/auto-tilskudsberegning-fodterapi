const Node = {
  "id": "105bd5f908bdd83b",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "g": "3dd412a87fd11491",
  "name": "Ny person?",
  "property": "obj.path",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "kp_lukborger",
      "vt": "flow"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1270,
  "y": 1500,
  "wires": [
    [
      "2c60b18dcca18fe0"
    ]
  ],
  "_order": 521
}

module.exports = Node;