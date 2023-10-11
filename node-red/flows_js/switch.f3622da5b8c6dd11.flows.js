const Node = {
  "id": "f3622da5b8c6dd11",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "g": "954337fe9fd2e7cc",
  "name": "",
  "property": "#:(storeInFile)::webSettings.state.activePage",
  "propertyType": "global",
  "rules": [
    {
      "t": "eq",
      "v": "view-nograntreceipts",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "view-receipts",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 490,
  "y": 3160,
  "wires": [
    [
      "d521a5aad7378097"
    ],
    [
      "609b3d8d3bfd669e"
    ]
  ],
  "_order": 596
}

module.exports = Node;