const Node = {
  "id": "cf5f06022544db63",
  "type": "switch",
  "z": "f99fd88fa65c74b9",
  "g": "a42cbec523628e4e",
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
  "x": 1090,
  "y": 1340,
  "wires": [
    [
      "ab6c857e7ced547b"
    ]
  ],
  "_order": 806
}

module.exports = Node;