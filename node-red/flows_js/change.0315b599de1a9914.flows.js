const Node = {
  "id": "0315b599de1a9914",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "44e7408f9fee1e77",
  "name": "update runHistory",
  "rules": [
    {
      "t": "set",
      "p": "currentRun.isFinalized",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "(\t    $startDate := currentRun.startDate;\t    $endDate := currentRun.endDate;\t\t    (runHistory[startDate = $startDate and endDate = $endDate] ~> $exists()) = false ?\t\t    $append(runHistory, currentRun)\t    :\t    runHistory\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "#:(storeInFile)::runHistory",
      "pt": "global",
      "to": "runHistory",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1390,
  "y": 300,
  "wires": [
    [
      "9f04b233af112b02"
    ]
  ],
  "_order": 274
}

module.exports = Node;