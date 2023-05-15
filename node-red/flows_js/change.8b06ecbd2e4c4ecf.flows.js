const Node = {
  "id": "8b06ecbd2e4c4ecf",
  "type": "change",
  "z": "43652557380ac3f3",
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
  "x": 730,
  "y": 760,
  "wires": [
    [
      "4f3852df34ce990f"
    ]
  ],
  "_order": 222
}

module.exports = Node;