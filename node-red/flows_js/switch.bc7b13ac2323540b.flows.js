const Node = {
  "id": "bc7b13ac2323540b",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "g": "669e09e244099963",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 585,
  "y": 600,
  "wires": [
    [
      "144d6812d5213472"
    ],
    [
      "d97f7bbbe0210f54"
    ]
  ],
  "l": false,
  "info": "",
  "_order": 219
}

Node.info = `
## Check for file - switch
This switch, which succeeds the JS snippet which determines receipt file existance, is used to skip the download of receipts if they already exist (they shouldn't!).
`

module.exports = Node;