const Node = {
  "id": "b1bb81c862ef6008",
  "type": "switch",
  "z": "5bb3204aef17c104",
  "g": "63492761a85db852",
  "name": "",
  "property": "#:(storeInFile)::webSettings.state.activePage",
  "propertyType": "global",
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
  "x": 430,
  "y": 1520,
  "wires": [
    [
      "0deb9ccc1ccfa1cd",
      "22499be248e4271c"
    ],
    [
      "e6a016eb2ab7c47b",
      "ed2a14aa9e6944fb"
    ]
  ],
  "_order": 547
}

module.exports = Node;