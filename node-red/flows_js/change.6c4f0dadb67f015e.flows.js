const Node = {
  "id": "6c4f0dadb67f015e",
  "type": "change",
  "z": "8ea344595d9a442a",
  "g": "954337fe9fd2e7cc",
  "name": "Set as processed",
  "rules": [
    {
      "t": "set",
      "p": "currentRun.processedReceipts",
      "pt": "msg",
      "to": "$distinct($append(currentRun.processedReceipts, tempData))",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "runHistory",
      "pt": "msg",
      "to": "$.runHistory~> |$|(\t\t$startDate := currentRun.startDate;\t$endDate := currentRun.endDate;\t\tstartDate = $startDate and endDate = $endDate ?\t{\t\t    \"processedReceipts\": currentRun.processedReceipts\t    \t}\t\t)|",
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
  "x": 990,
  "y": 3200,
  "wires": [
    [
      "cbd06ead16ce268d"
    ]
  ],
  "_order": 275
}

module.exports = Node;