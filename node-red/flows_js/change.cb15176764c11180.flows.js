const Node = {
  "id": "cb15176764c11180",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "59d040b48f8f3dda",
  "name": "Get history",
  "rules": [
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "#:(storeInFile)::runHistory",
      "tot": "global",
      "dc": true
    },
    {
      "t": "set",
      "p": "currentRun",
      "pt": "msg",
      "to": "runHistory[$count(runHistory)-1]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1370,
  "y": 3160,
  "wires": [
    [
      "72afce271d46b8f9"
    ]
  ],
  "_order": 606
}

module.exports = Node;