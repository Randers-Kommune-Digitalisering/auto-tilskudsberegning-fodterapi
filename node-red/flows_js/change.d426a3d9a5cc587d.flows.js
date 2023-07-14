const Node = {
  "id": "d426a3d9a5cc587d",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "#:(storeInFile)::runHistory",
      "pt": "global",
      "to": "[]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 720,
  "y": 380,
  "wires": [
    [
      "35e66215df68100f"
    ]
  ],
  "info": "",
  "_order": 455
}

Node.info = `
## Set global.runHistory
Sets an empty list in global context stored in file.
`

module.exports = Node;