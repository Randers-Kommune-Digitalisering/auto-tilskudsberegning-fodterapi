const Node = {
  "id": "6226138fabf9a3b8",
  "type": "switch",
  "z": "c28a486ea3e09387",
  "g": "e4e7a254403521e9",
  "name": "",
  "property": "payload.webSettings.state.activePage",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "view-receipts",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "view-nograntreceipts",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 570,
  "y": 1240,
  "wires": [
    [
      "54254a91e943fb50",
      "419b7ad31525a3a3"
    ],
    [
      "c888f934919b1eb8",
      "f23aa08410fc8960"
    ]
  ],
  "_order": 461
}

module.exports = Node;