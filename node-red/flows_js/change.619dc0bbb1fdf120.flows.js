const Node = {
  "id": "619dc0bbb1fdf120",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "get runHistory",
  "rules": [
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "#:(storeInFile)::runHistory",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 960,
  "y": 280,
  "wires": [
    [
      "35e66215df68100f"
    ]
  ],
  "info": "",
  "_order": 274
}

Node.info = `
## get runHistory
Copies the run history stored in file to msg.runHistory.
`

module.exports = Node;