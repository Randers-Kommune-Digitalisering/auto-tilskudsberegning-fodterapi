const Node = {
  "id": "135dfd2c3c6f4850",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "954337fe9fd2e7cc",
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
  "x": 580,
  "y": 2640,
  "wires": [
    [
      "f3622da5b8c6dd11"
    ]
  ],
  "_order": 262
}

module.exports = Node;