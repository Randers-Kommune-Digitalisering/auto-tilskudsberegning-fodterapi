const Node = {
  "id": "421ea3a3d1ce558a",
  "type": "switch",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "",
  "property": "#:(storeInFile)::runHistory",
  "propertyType": "global",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 630,
  "y": 320,
  "wires": [
    [
      "619dc0bbb1fdf120"
    ],
    [
      "d426a3d9a5cc587d"
    ]
  ],
  "info": "",
  "_order": 323
}

Node.info = `
## Get runHistory switch
Checks if there is a run history stored in memory (in global context).
`

module.exports = Node;